import { prisma } from "@/lib/db";
import { ApifyClient } from "apify-client";
import { ApifyEnvSchema } from "@/lib/apify-schemas";
import { NextRequest, NextResponse } from "next/server";

// GET /api/scrapes/[scrapeId]/status - Get real-time status from Apify
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ scrapeId: string }> },
) {
  try {
    const { scrapeId } = await params;

    const scrape = await prisma.scrape.findUnique({
      where: { id: scrapeId },
    });

    if (!scrape) {
      return NextResponse.json({ error: "Scrape not found" }, { status: 404 });
    }

    // Get real-time count of listings found so far
    const currentListingsCount = await prisma.scrapeListing.count({
      where: { scrapeId },
    });

    // If scrape is completed or failed, just return the database status
    if (scrape.status === "completed" || scrape.status === "failed") {
      return NextResponse.json({
        scrape: {
          ...scrape,
          listingsCount:
            scrape.status === "completed"
              ? scrape.listingsCount
              : currentListingsCount,
        },
        apifyStatus: null,
      });
    }

    // For running/pending scrapes, try to get Apify job status
    if (scrape.apifyRunId && scrape.apifyRunId !== "pending") {
      try {
        const env = ApifyEnvSchema.parse(process.env);
        const client = new ApifyClient({ token: env.APIFY_TOKEN });

        const run = await client.run(scrape.apifyRunId).get();

        return NextResponse.json({
          scrape: {
            ...scrape,
            listingsCount: currentListingsCount,
          },
          apifyStatus: run
            ? {
                status: run.status,
                stats: run.stats,
                startedAt: run.startedAt,
                finishedAt: run.finishedAt,
              }
            : null,
        });
      } catch (error) {
        console.error("Error fetching Apify status:", error);
        // Fall through to return just database status
      }
    }

    // Return just database status if no Apify info available
    return NextResponse.json({
      scrape: {
        ...scrape,
        listingsCount: currentListingsCount,
      },
      apifyStatus: null,
    });
  } catch (error) {
    console.error("Error fetching scrape status:", error);
    return NextResponse.json(
      { error: "Failed to fetch scrape status" },
      { status: 500 },
    );
  }
}

