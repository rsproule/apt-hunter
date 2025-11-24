import { type NextRequest, NextResponse } from "next/server";
import { getUserId } from "@/echo";
import { prisma } from "@/lib/db";

interface RouteParams {
	params: Promise<{
		enhancementId: string;
	}>;
}

// GET /api/enhancements/[enhancementId] - Get enhancement details and results
export async function GET(request: NextRequest, { params }: RouteParams) {
	try {
		const { enhancementId } = await params;

		// Get userId from Echo session
		const userId = await getUserId();

		if (!userId) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		// Fetch the enhancement with columns
		const enhancement = await prisma.enhancement.findFirst({
			where: {
				id: enhancementId,
				userId,
			},
			include: {
				columns: {
					orderBy: {
						order: "asc",
					},
				},
				scrape: {
					select: {
						id: true,
						name: true,
						listingsCount: true,
					},
				},
			},
		});

		if (!enhancement) {
			return NextResponse.json(
				{ error: "Enhancement not found or unauthorized" },
				{ status: 404 },
			);
		}

		// Get results count by status
		const resultStats = await prisma.enhancementResult.groupBy({
			by: ["status"],
			where: {
				enhancementId,
			},
			_count: true,
		});

		const stats = {
			total: enhancement.totalCount,
			processed: enhancement.processedCount,
			pending: resultStats.find((s) => s.status === "pending")?._count ?? 0,
			processing:
				resultStats.find((s) => s.status === "processing")?._count ?? 0,
			completed: resultStats.find((s) => s.status === "completed")?._count ?? 0,
			failed: resultStats.find((s) => s.status === "failed")?._count ?? 0,
		};

		return NextResponse.json({
			enhancement,
			stats,
		});
	} catch (error) {
		console.error("Error fetching enhancement:", error);
		return NextResponse.json(
			{ error: "Failed to fetch enhancement" },
			{ status: 500 },
		);
	}
}
