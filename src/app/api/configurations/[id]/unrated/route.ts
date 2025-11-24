import { type NextRequest, NextResponse } from "next/server";
import { getUserId } from "@/echo";
import { prisma } from "@/lib/db";

interface RouteParams {
	params: Promise<{
		id: string;
	}>;
}

// GET /api/configurations/[id]/unrated - Get listings that haven't been rated yet
export async function GET(request: NextRequest, { params }: RouteParams) {
	try {
		const { id } = await params;
		const userId = await getUserId();
		if (!userId) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		// Verify configuration belongs to user
		const configuration = await prisma.searchConfiguration.findFirst({
			where: { id, userId },
			include: {
				scrape: true,
				enhancement: {
					include: {
						columns: {
							orderBy: { order: "asc" },
						},
					},
				},
			},
		});

		if (!configuration) {
			return NextResponse.json(
				{ error: "Configuration not found" },
				{ status: 404 },
			);
		}

		const { scrape, enhancement } = configuration;
		const columnWeights = configuration.columnWeights as Record<string, number>;

		// Get all listing IDs from the scrape
		const scrapeListings = await prisma.scrapeListing.findMany({
			where: { scrapeId: scrape.id },
			select: { listingId: true },
		});

		const allListingIds = scrapeListings.map((sl) => sl.listingId);

		// Get listing IDs that have been rated
		const ratedResponses = await prisma.userListingResponse.findMany({
			where: {
				configurationId: id,
				listingId: { in: allListingIds },
			},
			select: { listingId: true },
		});

		const ratedListingIds = new Set(ratedResponses.map((r) => r.listingId));

		// Get unrated listing IDs
		const unratedListingIds = allListingIds.filter(
			(lid) => !ratedListingIds.has(lid),
		);

		if (unratedListingIds.length === 0) {
			return NextResponse.json({
				listings: [],
				totalUnrated: 0,
				enhancements: [
					{
						id: enhancement.id,
						query: enhancement.query,
						columns: enhancement.columns,
					},
				],
			});
		}

		// Calculate composite scores for unrated listings
		const rankedListings = await prisma.$queryRaw<
			Array<{
				listingId: string;
				totalCompositeScore: number;
			}>
		>`
      SELECT 
        l.id as "listingId",
        COALESCE(
          SUM(ev."normalizedValue" * ec.weight) / NULLIF(SUM(ec.weight), 0),
          0
        ) as "totalCompositeScore"
      FROM "Listing" l
      LEFT JOIN "EnhancementResult" er ON er."listingId" = l.id
        AND er."enhancementId" = ${enhancement.id}
        AND er.status = 'completed'
      LEFT JOIN "EnhancementValue" ev ON ev."resultId" = er.id
      LEFT JOIN "EnhancementColumn" ec ON ec.id = ev."columnId"
      WHERE l.id = ANY(${unratedListingIds}::text[])
      GROUP BY l.id
      ORDER BY "totalCompositeScore" DESC
    `;

		const rankedListingIds = rankedListings.map((r) => r.listingId);

		// Fetch the actual listings
		const listings = await prisma.listing.findMany({
			where: { id: { in: rankedListingIds } },
			include: {
				enhancementResults: {
					where: {
						enhancementId: enhancement.id,
						status: "completed",
					},
				},
			},
		});

		// Create map for scores
		const scoresMap = new Map(
			rankedListings.map((r) => [r.listingId, Number(r.totalCompositeScore)]),
		);

		// Sort listings by rank
		const listingsMap = new Map(listings.map((l) => [l.id, l]));
		const sortedListings = rankedListingIds
			.map((id) => {
				const listing = listingsMap.get(id);
				if (!listing) return null;
				return {
					...listing,
					compositeScore: scoresMap.get(id) || 0,
				};
			})
			.filter(Boolean);

		return NextResponse.json({
			listings: sortedListings,
			totalUnrated: unratedListingIds.length,
			enhancements: [
				{
					id: enhancement.id,
					query: enhancement.query,
					columns: enhancement.columns,
				},
			],
		});
	} catch (error) {
		console.error("Error fetching unrated listings:", error);
		return NextResponse.json(
			{ error: "Failed to fetch unrated listings" },
			{ status: 500 },
		);
	}
}
