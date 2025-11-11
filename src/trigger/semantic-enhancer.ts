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

const ListingAnalysisSchema = z.object({
  values: z.record(z.string(), z.union([z.boolean(), z.number()])),
  reasoning: z.string().optional(),
});

interface SemanticEnhancementPayload {
  enhancementId: string;
  scrapeId: string;
  query: string;
  userId: string;
}

export const runSemanticEnhancement = task({
  id: "semantic-enhancer",
  run: async (payload: SemanticEnhancementPayload) => {
    const { enhancementId, scrapeId, query } = payload;

    console.log(`Starting semantic enhancement ${enhancementId}`);

    try {
      // Update status to processing
      await prisma.enhancement.update({
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

      // ===== PASS 2: Listing Analysis Loop =====
      console.log("Pass 2: Analyzing listings...");

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
      const batchSize = 20; // Process 20 listings at a time

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

Return a JSON object with the column names as keys and the values.`;

              // Call GPT-4o Vision
              const result = await generateObject({
                model: openai("gpt-4o"),
                schema: ListingAnalysisSchema,
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

              console.log(
                `Analyzed listing ${listing.zpid}:`,
                result.object.values,
              );

              // Calculate composite score
              let compositeScore = 0;
              let totalWeight = 0;

              for (const column of columns) {
                const value = result.object.values[column.name];
                const weight = 5.0; // Default weight, will be user-configurable

                if (value !== undefined && value !== null) {
                  // Normalize to 0-10 scale
                  const normalizedValue =
                    typeof value === "boolean"
                      ? value
                        ? 10
                        : 0
                      : Number(value);

                  compositeScore += normalizedValue * weight;
                  totalWeight += weight;
                }
              }

              // Average the weighted scores
              const finalScore =
                totalWeight > 0 ? compositeScore / totalWeight : 0;

              // Save the results with composite score
              await prisma.enhancementResult.updateMany({
                where: {
                  enhancementId,
                  listingId: listing.id,
                },
                data: {
                  values: result.object.values as any,
                  compositeScore: finalScore,
                  status: "completed",
                },
              });

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

        // Small delay between batches to avoid rate limits
        if (i + batchSize < scrapeListings.length) {
          await wait.for({ seconds: 1 });
        }
      }

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
        `Enhancement ${enhancementId} completed. Processed ${processedCount}/${scrapeListings.length} listings`,
      );

      return {
        success: true,
        processedCount,
        totalCount: scrapeListings.length,
      };
    } catch (error) {
      console.error(`Error in semantic enhancement ${enhancementId}:`, error);

      await prisma.enhancement.update({
        where: { id: enhancementId },
        data: {
          status: "failed",
          error: error instanceof Error ? error.message : "Unknown error",
          completedAt: new Date(),
        },
      });

      throw error;
    }
  },
});
