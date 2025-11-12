import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

// GET /api/saved-queries/[id]/unrated - Get listings that haven't been rated yet
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const userId = request.headers.get("x-echo-user-id");
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verify saved query belongs to user
    const savedQuery = await prisma.savedQuery.findFirst({
      where: { id, userId },
    });

    if (!savedQuery) {
      return NextResponse.json(
        { error: "Saved query not found" },
        { status: 404 },
      );
    }

    // Get the most recent scrape for this saved query
    if (!savedQuery.lastScrapeId) {
      return NextResponse.json({
        listings: [],
        message: "No scrape has been run for this saved query yet",
      });
    }

    // Get all listing IDs from the most recent scrape
    const scrapeListings = await prisma.scrapeListing.findMany({
      where: { scrapeId: savedQuery.lastScrapeId },
      select: { listingId: true },
    });

    const allListingIds = scrapeListings.map((sl) => sl.listingId);

    // Get listing IDs that have been rated
    const ratedResponses = await prisma.userListingResponse.findMany({
      where: {
        savedQueryId: id,
        listingId: { in: allListingIds },
      },
      select: { listingId: true },
    });

    const ratedListingIds = new Set(ratedResponses.map((r) => r.listingId));

    // Get unrated listing IDs
    const unratedListingIds = allListingIds.filter(
      (lid) => !ratedListingIds.has(lid),
    );

    // Fetch enhancement results if available
    const enhancements = await prisma.enhancement.findMany({
      where: { scrapeId: savedQuery.lastScrapeId },
      include: {
        columns: {
          orderBy: { order: "asc" },
        },
      },
    });

    const enhancementIds = enhancements.map((e) => e.id);

    // Fetch listings with their enhancement data
    const listings = await prisma.listing.findMany({
      where: { id: { in: unratedListingIds } },
      include: {
        enhancementResults: {
          where: {
            enhancementId: { in: enhancementIds },
            status: "completed",
          },
        },
      },
    });

    // Calculate composite scores based on saved column weights
    const columnWeights = savedQuery.columnWeights as Record<string, number>;
    
    const listingsWithScores = listings.map((listing) => {
      let totalScore = 0;
      let totalWeight = 0;

      for (const result of listing.enhancementResults) {
        const values = result.values as Record<string, boolean | number>;
        
        for (const [columnName, value] of Object.entries(values)) {
          const weight = columnWeights[columnName] || 5.0;
          const normalizedValue = typeof value === "boolean" 
            ? (value ? 10 : 0) 
            : value;
          
          totalScore += normalizedValue * weight;
          totalWeight += weight;
        }
      }

      const compositeScore = totalWeight > 0 ? totalScore / totalWeight : 0;

      return {
        ...listing,
        compositeScore,
      };
    });

    // Sort by composite score descending
    listingsWithScores.sort((a, b) => b.compositeScore - a.compositeScore);

    return NextResponse.json({
      listings: listingsWithScores,
      totalUnrated: unratedListingIds.length,
      enhancements: enhancements.map((e) => ({
        id: e.id,
        query: e.query,
        columns: e.columns,
      })),
    });
  } catch (error) {
    console.error("Error fetching unrated listings:", error);
    return NextResponse.json(
      { error: "Failed to fetch unrated listings" },
      { status: 500 },
    );
  }
}


