import { prisma } from "@/lib/db";
import { createOpenAI } from "@ai-sdk/openai";
import { task, wait } from "@trigger.dev/sdk/v3";
import { generateObject } from "ai";
import { z } from "zod";

const openai = createOpenAI({
  apiKey: process.env.ECHO_API_KEY,
  baseURL: "https://echo.router.merit.systems",
});

const ColumnSchema = z.object({
  name: z.string(),
  type: z.enum(["boolean", "score"]),
  description: z.string(),
});

const QueryValidationSchema = z.object({
  isVisuallyAnswerable: z.boolean(),
  reason: z.string(),
  columns: z.array(ColumnSchema).optional(),
});

// Helper function to build dynamic schema based on columns
function buildListingAnalysisSchema(
  columns: Array<{ name: string; type: string }>,
) {
  const schemaFields: Record<string, z.ZodTypeAny> = {};

  for (const column of columns) {
    if (column.type === "boolean") {
      schemaFields[column.name] = z.boolean();
    } else {
      // score type
      schemaFields[column.name] = z.number().min(0).max(10);
    }
  }

  return z.object(schemaFields);
}

interface SemanticEnhancementPayload {
  enhancementId: string;
  scrapeId: string;
  query: string;
  userId: string;
}

export const runSemanticEnhancement = task({
  id: "semantic-enhancer",
  maxDuration: 3600, // 1 hour max
  run: async (payload: SemanticEnhancementPayload) => {
    const { enhancementId, scrapeId, query } = payload;

    console.log(`Starting semantic enhancement ${enhancementId}`);

    let enhancement;
    try {
      // Update status to processing
      enhancement = await prisma.enhancement.update({
        where: { id: enhancementId },
        data: { status: "processing" },
      });

      // ===== PASS 1: Query Validation & Column Generation =====
      console.log("Pass 1: Validating query and generating columns...");

      const validationResult = await generateObject({
        model: openai("gpt-4o"),
        schema: QueryValidationSchema,
        prompt: `You are analyzing a user query for a real estate listing search enhancement system.

The system can ONLY analyze VISUAL features from property photos. It cannot determine:
- Crime rates, safety, or neighborhood quality
- Noise levels or disturbances
- School quality or proximity
- Future development plans
- Legal restrictions or HOA rules
- Anything not visible in photos

User query: "${query}"

Task:
1. Determine if this query can be answered by analyzing property photos
2. If YES, generate 1-5 semantic columns to extract from the photos
3. If NO, explain why it requires non-visual information

Column naming rules:
- Use snake_case
- For boolean checks: "has_X" or "is_X" (e.g., "has_hardwood_floors", "has_modern_appliances")
- For scores: "X_score" or "X_quality" (e.g., "natural_light_score", "kitchen_quality")
- Scores should be 0-10 numeric values

Examples of VALID visual queries:
- "hardwood floors" → has_hardwood_floors (boolean)
- "modern kitchen appliances" → modern_appliances_score (score)
- "natural lighting" → natural_light_score (score)
- "outdoor space" → has_outdoor_space (boolean), outdoor_space_size_score (score)

Examples of INVALID queries:
- "safe neighborhood" → Cannot see from photos
- "good schools" → Not visual
- "quiet area" → Cannot determine from photos`,
      });

      if (!validationResult.object.isVisuallyAnswerable) {
        await prisma.enhancement.update({
          where: { id: enhancementId },
          data: {
            status: "failed",
            error: `This query cannot be answered visually: ${validationResult.object.reason}\n\nTry queries about: floors, appliances, layout, outdoor space, condition, natural light, finishes, etc.`,
            completedAt: new Date(),
          },
        });
        return {
          success: false,
          error: validationResult.object.reason,
        };
      }

      const columns = validationResult.object.columns || [];

      if (columns.length === 0) {
        await prisma.enhancement.update({
          where: { id: enhancementId },
          data: {
            status: "failed",
            error: "Could not generate semantic columns from query",
            completedAt: new Date(),
          },
        });
        return {
          success: false,
          error: "No columns generated",
        };
      }

      console.log(`Generated ${columns.length} columns:`, columns);

      // Save columns to database
      for (let i = 0; i < columns.length; i++) {
        await prisma.enhancementColumn.create({
          data: {
            enhancementId,
            name: columns[i].name,
            type: columns[i].type,
            description: columns[i].description,
            order: i,
          },
        });
      }

      console.log(
        `✅ Columns created for enhancement ${enhancementId}:`,
        columns.map((c) => c.name),
      );

      // Automatically trigger listing processing (no approval needed)
      const { tasks } = await import("@trigger.dev/sdk/v3");
      const handle = await tasks.trigger<typeof processEnhancementListings>(
        "process-enhancement-listings",
        {
          enhancementId,
          scrapeId,
        },
      );

      // Update with task ID
      await prisma.enhancement.update({
        where: { id: enhancementId },
        data: {
          status: "processing",
          taskId: handle.id,
        },
      });

      console.log(
        `🚀 Started processing listings for enhancement ${enhancementId} (task: ${handle.id})`,
      );

      return {
        success: true,
        status: "processing",
        columns: columns.map((c) => c.name),
        taskId: handle.id,
        message: "Columns generated and processing started automatically.",
      };
    } catch (error) {
      console.error(`Error in semantic enhancement ${enhancementId}:`, error);

      // Always mark as failed to prevent infinite polling
      try {
        await prisma.enhancement.update({
          where: { id: enhancementId },
          data: {
            status: "failed",
            error:
              error instanceof Error
                ? error.message.slice(0, 500) // Limit error message length
                : "Unknown error occurred during enhancement",
            completedAt: new Date(),
          },
        });
      } catch (dbError) {
        console.error("Failed to mark enhancement as failed:", dbError);
      }

      // Return error info instead of throwing to prevent retry loops
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        enhancementId,
      };
    }
  },
});

// Separate task for processing listings after approval
export const processEnhancementListings = task({
  id: "process-enhancement-listings",
  maxDuration: 3600, // 1 hour max
  run: async (payload: { enhancementId: string; scrapeId: string }) => {
    const { enhancementId, scrapeId } = payload;

    console.log(`Processing listings for enhancement ${enhancementId}`);

    try {
      // Update status to processing
      await prisma.enhancement.update({
        where: { id: enhancementId },
        data: { status: "processing" },
      });

      // Get enhancement with columns
      const enhancement = await prisma.enhancement.findUnique({
        where: { id: enhancementId },
        include: {
          columns: {
            orderBy: { order: "asc" },
          },
        },
      });

      if (!enhancement) {
        throw new Error("Enhancement not found");
      }

      const columns = enhancement.columns;

      // Get all listings for this scrape
      const scrapeListings = await prisma.scrapeListing.findMany({
        where: { scrapeId },
        include: {
          listing: true,
        },
        orderBy: {
          foundAt: "desc",
        },
      });

      console.log(`Found ${scrapeListings.length} listings to analyze`);

      // Create initial enhancement results
      for (const scrapeListing of scrapeListings) {
        await prisma.enhancementResult.create({
          data: {
            enhancementId,
            listingId: scrapeListing.listing.id,
            values: {},
            status: "pending",
          },
        });
      }

      let processedCount = 0;
      const batchSize = 50; // Process 50 listings at a time for maximum throughput

      for (let i = 0; i < scrapeListings.length; i += batchSize) {
        const batch = scrapeListings.slice(i, i + batchSize);

        // Process batch in parallel
        await Promise.all(
          batch.map(async (scrapeListing) => {
            try {
              const listing = scrapeListing.listing;

              // Mark as processing
              await prisma.enhancementResult.updateMany({
                where: {
                  enhancementId,
                  listingId: listing.id,
                },
                data: { status: "processing" },
              });

              // Get photos - limit to first 10 to avoid token limits
              const photos = listing.photos.slice(0, 10);

              if (photos.length === 0) {
                // No photos available
                console.log(
                  `❌ Skipping listing ${listing.zpid}: No photos available`,
                );
                await prisma.enhancementResult.updateMany({
                  where: {
                    enhancementId,
                    listingId: listing.id,
                  },
                  data: {
                    status: "failed",
                    error: "No photos available for analysis",
                  },
                });
                return;
              }

              // Build the analysis prompt
              const columnDescriptions = columns
                .map((col) => {
                  const valueType =
                    col.type === "boolean"
                      ? "true/false"
                      : "0-10 numeric score";
                  return `- ${col.name} (${valueType}): ${col.description}`;
                })
                .join("\n");

              const analysisPrompt = `You are analyzing property listing photos to extract specific features.

Property Address: ${listing.address}
Property Type: ${listing.homeType || "Unknown"}
Beds/Baths: ${listing.beds || "?"} beds, ${listing.baths || "?"} baths

Based on the provided photos, extract the following information:

${columnDescriptions}

For each column:
- If it's a boolean, return true or false based on what you see
- If it's a score (0-10), rate objectively based on visibility and quality
- Be conservative - if you can't see it clearly, return false or a low score

IMPORTANT: Return ONLY a flat JSON object with column names as keys and their values.
Example: {"has_hardwood_floors": true, "natural_light_score": 8}
Do NOT wrap in a "values" key.`;

              // Build dynamic schema for this specific set of columns
              const dynamicSchema = buildListingAnalysisSchema(columns);

              // Call GPT-4o Vision with retry logic
              let result;
              let retryCount = 0;
              const MAX_RETRIES = 2;

              while (retryCount <= MAX_RETRIES) {
                try {
                  result = await generateObject({
                    model: openai("gpt-4o"),
                    schema: dynamicSchema,
                    messages: [
                      {
                        role: "user",
                        content: [
                          {
                            type: "text",
                            text: analysisPrompt,
                          },
                          ...photos.map((photoUrl) => ({
                            type: "image" as const,
                            image: photoUrl,
                          })),
                        ],
                      },
                    ],
                  });
                  break; // Success, exit retry loop
                } catch (schemaError) {
                  retryCount++;
                  if (retryCount > MAX_RETRIES) {
                    throw schemaError;
                  }
                  console.warn(
                    `Schema validation failed for ${listing.zpid}, retry ${retryCount}/${MAX_RETRIES}`,
                  );
                  await wait.for({ seconds: 1 });
                }
              }

              if (!result) {
                throw new Error("Failed to generate result after retries");
              }

              const values = result.object as Record<string, boolean | number>;

              console.log(`Analyzed listing ${listing.zpid}:`, values);

              // Save the results
              // Note: compositeScore is set to 0 here as scores are calculated dynamically
              // at query time using EnhancementValue records and current column weights
              const updatedResult = await prisma.enhancementResult.updateMany({
                where: {
                  enhancementId,
                  listingId: listing.id,
                },
                data: {
                  values: values as any,
                  compositeScore: 0, // Not used - scores calculated at query time
                  status: "completed",
                },
              });

              // Also save individual values for efficient sorting
              const enhancementResult =
                await prisma.enhancementResult.findFirst({
                  where: {
                    enhancementId,
                    listingId: listing.id,
                  },
                });

              if (enhancementResult) {
                // Save each column value individually
                for (const column of columns) {
                  const value = values[column.name];

                  if (value !== undefined && value !== null) {
                    // Normalize to 0-10 scale
                    const normalizedValue =
                      typeof value === "boolean"
                        ? value
                          ? 10
                          : 0
                        : Number(value);

                    // Get the column ID
                    const columnRecord =
                      await prisma.enhancementColumn.findFirst({
                        where: {
                          enhancementId,
                          name: column.name,
                        },
                      });

                    if (columnRecord) {
                      await prisma.enhancementValue.upsert({
                        where: {
                          resultId_columnId: {
                            resultId: enhancementResult.id,
                            columnId: columnRecord.id,
                          },
                        },
                        create: {
                          resultId: enhancementResult.id,
                          columnId: columnRecord.id,
                          enhancementId,
                          listingId: listing.id,
                          normalizedValue,
                        },
                        update: {
                          normalizedValue,
                        },
                      });
                    }
                  }
                }
              }

              processedCount++;

              // Update enhancement progress
              await prisma.enhancement.update({
                where: { id: enhancementId },
                data: { processedCount },
              });
            } catch (error) {
              console.error(
                `Error analyzing listing ${scrapeListing.listing.zpid}:`,
                error,
              );

              await prisma.enhancementResult.updateMany({
                where: {
                  enhancementId,
                  listingId: scrapeListing.listing.id,
                },
                data: {
                  status: "failed",
                  error:
                    error instanceof Error ? error.message : "Unknown error",
                },
              });
            }
          }),
        );

        // Minimal delay between batches
        if (i + batchSize < scrapeListings.length) {
          await wait.for({ seconds: 0.5 });
        }
      }

      // Get status breakdown
      const statusCounts = await prisma.enhancementResult.groupBy({
        by: ["status"],
        where: { enhancementId },
        _count: true,
      });

      const statusSummary = statusCounts.reduce((acc, { status, _count }) => {
        acc[status] = _count;
        return acc;
      }, {} as Record<string, number>);

      // Mark enhancement as completed
      await prisma.enhancement.update({
        where: { id: enhancementId },
        data: {
          status: "completed",
          completedAt: new Date(),
          processedCount,
        },
      });

      console.log(
        `✅ Enhancement ${enhancementId} completed:`,
        `\n  Total: ${scrapeListings.length}`,
        `\n  Completed: ${statusSummary.completed || 0}`,
        `\n  Failed: ${statusSummary.failed || 0}`,
        `\n  Pending: ${statusSummary.pending || 0}`,
      );

      return {
        success: true,
        processedCount,
        totalCount: scrapeListings.length,
        statusSummary,
      };
    } catch (error) {
      console.error(
        `Error processing enhancement listings ${enhancementId}:`,
        error,
      );

      // Always mark as failed to prevent infinite polling
      try {
        await prisma.enhancement.update({
          where: { id: enhancementId },
          data: {
            status: "failed",
            error:
              error instanceof Error
                ? error.message.slice(0, 500) // Limit error message length
                : "Unknown error occurred during enhancement",
            completedAt: new Date(),
          },
        });
      } catch (dbError) {
        console.error("Failed to mark enhancement as failed:", dbError);
      }

      // Return error info instead of throwing to prevent retry loops
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        enhancementId,
      };
    }
  },
});
