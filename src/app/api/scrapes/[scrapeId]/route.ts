import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// GET /api/scrapes/[scrapeId] - Get a specific scrape
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ scrapeId: string }> },
) {
  try {
    const { scrapeId } = await params;

    const scrape = await prisma.scrape.findUnique({
      where: { id: scrapeId },
      include: {
        listings: {
          include: {
            listing: true,
          },
        },
      },
    });

    if (!scrape) {
      return NextResponse.json({ error: "Scrape not found" }, { status: 404 });
    }

    return NextResponse.json(scrape);
  } catch (error) {
    console.error("Error fetching scrape:", error);
    return NextResponse.json(
      { error: "Failed to fetch scrape" },
      { status: 500 },
    );
  }
}

