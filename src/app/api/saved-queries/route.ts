import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// GET /api/saved-queries - List all saved queries for the user
export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get("x-echo-user-id");
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const savedQueries = await prisma.savedQuery.findMany({
      where: { userId },
      orderBy: { updatedAt: "desc" },
      include: {
        _count: {
          select: {
            responses: true,
          },
        },
      },
    });

    return NextResponse.json({ savedQueries });
  } catch (error) {
    console.error("Error fetching saved queries:", error);
    return NextResponse.json(
      { error: "Failed to fetch saved queries" },
      { status: 500 },
    );
  }
}

// POST /api/saved-queries - Create a new saved query
export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get("x-echo-user-id");
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      name,
      description,
      searchType,
      searchQuery,
      enhancementQuery,
      columnWeights,
      scrapeId, // Optional: link to existing scrape
    } = body;

    // Validate required fields
    if (!name || !searchType || !searchQuery || !enhancementQuery) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const savedQuery = await prisma.savedQuery.create({
      data: {
        userId,
        name,
        description,
        searchType,
        searchQuery,
        enhancementQuery,
        columnWeights: columnWeights || {},
        // If creating from an existing scrape, link it
        ...(scrapeId && {
          lastScrapeId: scrapeId,
          lastRunAt: new Date(),
        }),
      },
    });

    return NextResponse.json({ savedQuery }, { status: 201 });
  } catch (error) {
    console.error("Error creating saved query:", error);
    return NextResponse.json(
      { error: "Failed to create saved query" },
      { status: 500 },
    );
  }
}

