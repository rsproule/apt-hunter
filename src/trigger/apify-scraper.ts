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

    // Validate the payload
    const validatedRequest = ApifyWorkflowRequestSchema.parse(payload);
    const { actorId, input, userId, searchType, searchQuery } = payload;

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

    // Step 2: Create scrape record
    let scrape;
    try {
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
    } catch (error) {
      console.error("Failed to create scrape record:", error);
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
              `Parsed ${validListings.length}/${dataset.items.length} listings`,
            );

            let created = 0;
            let updated = 0;

            // Save each listing and associate with scrape
            for (const listing of validListings) {
              const data = extractListingForDb(listing);

              const existing = await prisma.listing.findUnique({
                where: { zpid: data.zpid },
              });

              const savedListing = await prisma.listing.upsert({
                where: { zpid: data.zpid },
                create: {
                  ...data,
                  rawData: data.rawData as any,
                },
                update: {
                  imgSrc: data.imgSrc,
                  photos: data.photos,
                  hasImage: data.hasImage,
                  has3DModel: data.has3DModel,
                  hasVideo: data.hasVideo,
                  statusType: data.statusType,
                  statusText: data.statusText,
                  price: data.price,
                  priceFormatted: data.priceFormatted,
                  address: data.address,
                  addressStreet: data.addressStreet,
                  addressCity: data.addressCity,
                  addressState: data.addressState,
                  addressZipcode: data.addressZipcode,
                  latitude: data.latitude,
                  longitude: data.longitude,
                  beds: data.beds,
                  baths: data.baths,
                  area: data.area,
                  homeType: data.homeType,
                  availabilityDate: data.availabilityDate,
                  brokerName: data.brokerName,
                  zestimate: data.zestimate,
                  rentZestimate: data.rentZestimate,
                  isFeaturedListing: data.isFeaturedListing,
                  rawData: data.rawData as any,
                  updatedAt: new Date(),
                },
              });

              if (existing) {
                updated++;
              } else {
                created++;
              }

              // Associate with scrape
              await prisma.scrapeListing.create({
                data: {
                  scrapeId: scrape.id,
                  listingId: savedListing.id,
                },
              });
            }

            console.log(
              `Saved listings: ${created} created, ${updated} updated`,
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
