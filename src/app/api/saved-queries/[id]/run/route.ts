import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { tasks } from "@trigger.dev/sdk/v3";
import type { runApifyTask } from "@/trigger/apify-scraper";
import type { ApifyActorId } from "@/lib/apify-actors";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

// POST /api/saved-queries/[id]/run - Execute a saved query
export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const userId = request.headers.get("x-echo-user-id");
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch the saved query
    const savedQuery = await prisma.savedQuery.findFirst({
      where: { id, userId },
    });

    if (!savedQuery) {
      return NextResponse.json(
        { error: "Saved query not found" },
        { status: 404 },
      );
    }

    // Create a new scrape with the saved query parameters
    const scrape = await prisma.scrape.create({
      data: {
        userId,
        name: `${savedQuery.name} - ${new Date().toLocaleDateString()}`,
        searchType: savedQuery.searchType,
        searchQuery: savedQuery.searchQuery,
        apifyRunId: `pending-${Date.now()}`, // Temporary, will be updated by trigger
        status: "pending",
      },
    });

    // Determine actorId and input based on searchType
    const searchQuery = savedQuery.searchQuery as any;
    let actorId: ApifyActorId;
    let input: any;

    if (savedQuery.searchType === "zipcode") {
      actorId = "maxcopell/zillow-zip-search" as const;
      input = {
        zipCodes: searchQuery.zipCodes || [],
        priceMax: searchQuery.priceMax,
        forRent: searchQuery.forRent ?? true,
        forSaleByAgent: searchQuery.forSaleByAgent,
        forSaleByOwner: searchQuery.forSaleByOwner,
        sold: searchQuery.sold,
      };
    } else {
      actorId = "maxcopell/zillow-scraper" as const;
      input = {
        searchUrls: searchQuery.searchUrls || [],
      };
    }

    // Trigger the scraper task
    const handle = await tasks.trigger<typeof runApifyTask>(
      "apify-scraper",
      {
        actorId,
        input,
        scrapeId: scrape.id,
        userId,
        searchType: savedQuery.searchType as "zipcode" | "url",
        searchQuery: savedQuery.searchQuery as any,
      },
    );

    // Update scrape with task ID
    await prisma.scrape.update({
      where: { id: scrape.id },
      data: {
        taskId: handle.id,
      },
    });

    // Update saved query's last run timestamp
    await prisma.savedQuery.update({
      where: { id },
      data: {
        lastRunAt: new Date(),
        lastScrapeId: scrape.id,
      },
    });

    return NextResponse.json({
      scrape: {
        id: scrape.id,
        status: scrape.status,
        taskId: handle.id,
      },
      message: "Scrape started successfully",
    });
  } catch (error) {
    console.error("Error running saved query:", error);
    return NextResponse.json(
      { error: "Failed to run saved query" },
      { status: 500 },
    );
  }
}

