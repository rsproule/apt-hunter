import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// GET /api/scrapes/[scrapeId]/listings - Get listings from a specific scrape
export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ scrapeId: string }> },
) {
	try {
		const { scrapeId } = await params;

		const searchParams = request.nextUrl.searchParams;
		const limit = Number.parseInt(searchParams.get("limit") || "100");
		const offset = Number.parseInt(searchParams.get("offset") || "0");

		const [scrapeListings, total] = await Promise.all([
			prisma.scrapeListing.findMany({
				where: { scrapeId },
				include: {
					listing: true,
				},
				orderBy: { foundAt: "desc" },
				take: limit,
				skip: offset,
			}),
			prisma.scrapeListing.count({
				where: { scrapeId },
			}),
		]);

		return NextResponse.json({
			listings: scrapeListings.map((sl) => sl.listing),
			total,
			hasMore: offset + scrapeListings.length < total,
			limit,
			offset,
		});
	} catch (error) {
		console.error("Error fetching scrape listings:", error);
		return NextResponse.json(
			{ error: "Failed to fetch scrape listings" },
			{ status: 500 },
		);
	}
}
