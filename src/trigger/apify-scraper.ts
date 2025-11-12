import type { ApifyActorId } from "@/lib/apify-actors";
import { ApifyWorkflowRequestSchema } from "@/lib/apify-actors";
import { ApifyEnvSchema } from "@/lib/apify-schemas";
import { prisma } from "@/lib/db";
import { extractListingForDb, parseZillowListings } from "@/lib/zillow-schemas";
import { task, wait } from "@trigger.dev/sdk/v3";
import { ApifyClient } from "apify-client";

const MAX_WAIT_TIME = 10 * 60 * 1000; // 10 minutes
const POLL_INTERVAL = 6000; // 5 seconds

interface ApifyTaskPayload {
  actorId: ApifyActorId;
  input: any;
  userId: string;
  searchType: "zipcode" | "url";
  searchQuery: any;
  scrapeId?: string; // Optional: if provided, update existing scrape instead of creating
}

interface ApifyTaskResult {
  success: boolean;
  runId: string;
  scrapeId?: string;
  status: string;
  results?: any[];
  count?: number;
  error?: string;
}

export const runApifyTask = task({
  id: "apify-scraper",
  run: async (payload: ApifyTaskPayload): Promise<ApifyTaskResult> => {
    const startTime = Date.now();

    // Validate the actorId and input part of the payload
    const validatedRequest = ApifyWorkflowRequestSchema.parse({
      actorId: payload.actorId,
      input: payload.input,
    });
    const { actorId, input, userId, searchType, searchQuery, scrapeId } =
      payload;

    // Get API token from environment
    const env = ApifyEnvSchema.parse(process.env);
    const apiToken = env.APIFY_TOKEN;

    // Initialize Apify client
    const client = new ApifyClient({ token: apiToken });

    // Step 1: Start the actor
    console.log(`Starting Apify actor ${actorId}...`);
    const run = await client.actor(actorId).start(input);
    const runId = run.id;
    console.log(`Started Apify actor ${actorId} with run ID: ${runId}`);

    // Step 2: Update or create scrape record
    let scrape;
    try {
      if (scrapeId) {
        // Update existing scrape record
        scrape = await prisma.scrape.update({
          where: { id: scrapeId },
          data: {
            apifyRunId: runId,
            status: "running",
          },
        });
        console.log(`Updated scrape record: ${scrape.id}`);
      } else {
        // Create new scrape record (fallback for old behavior)
        scrape = await prisma.scrape.create({
          data: {
            userId,
            searchType,
            searchQuery,
            apifyRunId: runId,
            status: "running",
          },
        });
        console.log(`Created scrape record: ${scrape.id}`);
      }
    } catch (error) {
      console.error("Failed to create/update scrape record:", error);
      // Continue anyway, we still want to get the results
    }

    // Step 3: Poll for completion
    while (Date.now() - startTime < MAX_WAIT_TIME) {
      // Check run status
      const runStatus = await client.run(runId).get();
      console.log(`Checking status for run ${runId}: ${runStatus?.status}`);

      if (runStatus?.status === "SUCCEEDED") {
        // Fetch results
        const dataset = await client
          .dataset(runStatus.defaultDatasetId)
          .listItems();

        console.log(`Fetched ${dataset.items.length} listings from Apify`);

        // Parse and save listings
        if (scrape) {
          try {
            const validListings = parseZillowListings(dataset.items);
            console.log(
              `Parsed ${validListings.length} listings from ${dataset.items.length} raw items (includes expanded multi-unit buildings)`,
            );

            let created = 0;
            let skipped = 0;

            // Save each listing and associate with scrape
            for (const listing of validListings) {
              const data = extractListingForDb(listing);

              // Check if listing already exists
              let savedListing = await prisma.listing.findUnique({
                where: { zpid: data.zpid },
              });

              if (!savedListing) {
                // Only create if it doesn't exist
                savedListing = await prisma.listing.create({
                  data: {
                    ...data,
                    rawData: data.rawData as any,
                  },
                });
                created++;
              } else {
                skipped++;
              }

              // Associate with scrape (avoid duplicate associations)
              await prisma.scrapeListing.upsert({
                where: {
                  scrapeId_listingId: {
                    scrapeId: scrape.id,
                    listingId: savedListing.id,
                  },
                },
                create: {
                  scrapeId: scrape.id,
                  listingId: savedListing.id,
                },
                update: {}, // No-op if already associated
              });
            }

            console.log(
              `Saved listings: ${created} created, ${skipped} skipped (already exist)`,
            );

            // Update scrape as completed
            await prisma.scrape.update({
              where: { id: scrape.id },
              data: {
                status: "completed",
                completedAt: new Date(),
                durationMs: Date.now() - startTime,
                listingsCount: validListings.length,
              },
            });
          } catch (error) {
            console.error("Failed to save listings:", error);
            if (scrape) {
              await prisma.scrape.update({
                where: { id: scrape.id },
                data: {
                  status: "failed",
                  error: `Failed to save listings: ${
                    error instanceof Error ? error.message : "Unknown error"
                  }`,
                  completedAt: new Date(),
                },
              });
            }
          }
        }

        return {
          success: true,
          runId,
          scrapeId: scrape?.id,
          status: runStatus.status,
          results: dataset.items,
          count: dataset.items.length,
        };
      }

      if (
        runStatus?.status === "FAILED" ||
        runStatus?.status === "ABORTED" ||
        runStatus?.status === "TIMED-OUT"
      ) {
        const error = `Actor run ${runStatus.status.toLowerCase()}`;

        // Mark scrape as failed
        if (scrape) {
          await prisma.scrape.update({
            where: { id: scrape.id },
            data: {
              status: "failed",
              error,
              completedAt: new Date(),
            },
          });
        }

        return {
          success: false,
          runId,
          scrapeId: scrape?.id,
          status: runStatus.status,
          error,
        };
      }

      // Still running, wait before checking again
      await wait.for({ seconds: POLL_INTERVAL / 1000 });
    }

    // Timeout
    const error = "Task timed out waiting for actor completion";
    if (scrape) {
      await prisma.scrape.update({
        where: { id: scrape.id },
        data: {
          status: "failed",
          error,
          completedAt: new Date(),
        },
      });
    }

    return {
      success: false,
      runId,
      scrapeId: scrape?.id,
      status: "TIMEOUT",
      error,
    };
  },
});
