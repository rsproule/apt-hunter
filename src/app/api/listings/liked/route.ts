import { type NextRequest, NextResponse } from "next/server";
import { getUserId } from "@/echo";
import { prisma } from "@/lib/db";

// GET /api/listings/liked - Get all liked listings across all configurations (deduplicated)
export async function GET(request: NextRequest) {
	try {
		const userId = await getUserId();
		if (!userId) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		// Fetch all liked responses for this user
		const responses = await prisma.userListingResponse.findMany({
			where: {
				userId,
				response: "like",
			},
			include: {
				listing: true,
				configuration: {
					select: {
						id: true,
						name: true,
					},
				},
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		// Group by listing ID to deduplicate
		const listingsMap = new Map<
			string,
			{
				listing: any;
				configurations: Array<{
					id: string;
					name: string | null;
					likedAt: string;
				}>;
			}
		>();

		for (const response of responses) {
			if (!listingsMap.has(response.listingId)) {
				listingsMap.set(response.listingId, {
					listing: response.listing,
					configurations: [],
				});
			}

			listingsMap.get(response.listingId)!.configurations.push({
				id: response.configuration.id,
				name: response.configuration.name,
				likedAt: response.createdAt.toISOString(),
			});
		}

		// Convert to array
		const listings = Array.from(listingsMap.values());

		return NextResponse.json({
			listings,
			totalCount: listings.length,
		});
	} catch (error) {
		console.error("Error fetching liked listings:", error);
		return NextResponse.json(
			{ error: "Failed to fetch liked listings" },
			{ status: 500 },
		);
	}
}
