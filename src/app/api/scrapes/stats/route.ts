import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// GET /api/scrapes/stats - Get user's scrape statistics
export async function GET(request: NextRequest) {
	try {
		// TODO: Get userId from Echo session
		// For now, use a placeholder - integrate with Echo auth
		const userId = request.headers.get("x-user-id") || "anonymous";

		const [totalScrapes, completedScrapes, totalListingsResult, recentScrapes] =
			await Promise.all([
				prisma.scrape.count({
					where: { userId },
				}),
				prisma.scrape.count({
					where: { userId, status: "completed" },
				}),
				prisma.scrape.aggregate({
					where: { userId, status: "completed" },
					_sum: {
						listingsCount: true,
					},
				}),
				prisma.scrape.findMany({
					where: { userId },
					orderBy: { createdAt: "desc" },
					take: 5,
				}),
			]);

		return NextResponse.json({
			totalScrapes,
			completedScrapes,
			totalListings: totalListingsResult._sum.listingsCount || 0,
			recentScrapes,
		});
	} catch (error) {
		console.error("Error fetching scrape stats:", error);
		return NextResponse.json(
			{ error: "Failed to fetch scrape stats" },
			{ status: 500 },
		);
	}
}
