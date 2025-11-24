import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// GET /api/scrapes/[scrapeId] - Get a specific scrape
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

		// Get real-time count of listings found so far (for active scrapes)
		const currentListingsCount = await prisma.scrapeListing.count({
			where: { scrapeId },
		});

		// Return scrape with real-time listing count
		return NextResponse.json({
			scrape: {
				...scrape,
				// Use the real-time count during active scraping, or the final count when completed
				listingsCount:
					scrape.status === "completed"
						? scrape.listingsCount
						: currentListingsCount,
			},
		});
	} catch (error) {
		console.error("Error fetching scrape:", error);
		return NextResponse.json(
			{ error: "Failed to fetch scrape" },
			{ status: 500 },
		);
	}
}
