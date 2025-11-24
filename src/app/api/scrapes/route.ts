import { type NextRequest, NextResponse } from "next/server";
import { getUserId } from "@/echo";
import { prisma } from "@/lib/db";

// GET /api/scrapes - Get user's scrape history
export async function GET(request: NextRequest) {
	try {
		// Get userId from Echo session
		const userId = await getUserId();

		if (!userId) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const searchParams = request.nextUrl.searchParams;
		const limit = Number.parseInt(searchParams.get("limit") || "50");
		const offset = Number.parseInt(searchParams.get("offset") || "0");
		const status = searchParams.get("status") || undefined;

		const where: any = { userId };
		if (status) {
			where.status = status;
		}

		const [scrapes, total] = await Promise.all([
			prisma.scrape.findMany({
				where,
				orderBy: { createdAt: "desc" },
				take: limit,
				skip: offset,
				include: {
					_count: {
						select: { listings: true },
					},
				},
			}),
			prisma.scrape.count({ where }),
		]);

		return NextResponse.json({
			scrapes,
			total,
			hasMore: offset + scrapes.length < total,
			limit,
			offset,
		});
	} catch (error) {
		console.error("Error fetching scrapes:", error);
		return NextResponse.json(
			{ error: "Failed to fetch scrapes" },
			{ status: 500 },
		);
	}
}
