import { tasks } from "@trigger.dev/sdk/v3";
import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getUserId } from "@/echo";
import { prisma } from "@/lib/db";

const EnhancementRequestSchema = z.object({
	scrapeId: z.string(),
	query: z.string().min(1).max(1000),
});

// POST /api/enhancements - Create a new enhancement and trigger the workflow
export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const validatedRequest = EnhancementRequestSchema.parse(body);

		// Get userId from Echo session
		const userId = await getUserId();

		if (!userId) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		// Verify the scrape exists and belongs to the user
		const scrape = await prisma.scrape.findFirst({
			where: {
				id: validatedRequest.scrapeId,
				userId,
			},
			include: {
				_count: {
					select: { listings: true },
				},
			},
		});

		if (!scrape) {
			return NextResponse.json(
				{ error: "Scrape not found or unauthorized" },
				{ status: 404 },
			);
		}

		if (scrape.status !== "completed") {
			return NextResponse.json(
				{ error: "Scrape must be completed before creating enhancements" },
				{ status: 400 },
			);
		}

		// Create the enhancement record
		const enhancement = await prisma.enhancement.create({
			data: {
				scrapeId: validatedRequest.scrapeId,
				userId,
				query: validatedRequest.query,
				status: "pending",
				totalCount: scrape._count.listings,
			},
		});

		// Trigger the semantic enhancement task
		const { runSemanticEnhancement } = await import(
			"@/trigger/semantic-enhancer"
		);
		const handle = await tasks.trigger<typeof runSemanticEnhancement>(
			"semantic-enhancer",
			{
				enhancementId: enhancement.id,
				scrapeId: validatedRequest.scrapeId,
				query: validatedRequest.query,
				userId,
			},
		);

		// Update the enhancement with the task ID
		await prisma.enhancement.update({
			where: { id: enhancement.id },
			data: {
				taskId: handle.id,
			},
		});

		return NextResponse.json({
			enhancementId: enhancement.id,
			taskId: handle.id,
			message: "Enhancement task triggered successfully",
		});
	} catch (error) {
		console.error("Error creating enhancement:", error);

		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{
					error: "Invalid request format",
					details: error.issues,
				},
				{ status: 400 },
			);
		}

		return NextResponse.json(
			{ error: "Failed to create enhancement" },
			{ status: 500 },
		);
	}
}

// GET /api/enhancements?scrapeId=xxx - Get enhancements for a scrape
export async function GET(request: NextRequest) {
	try {
		// Get userId from Echo session
		const userId = await getUserId();

		if (!userId) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const searchParams = request.nextUrl.searchParams;
		const scrapeId = searchParams.get("scrapeId");

		if (!scrapeId) {
			return NextResponse.json(
				{ error: "scrapeId is required" },
				{ status: 400 },
			);
		}

		// Verify the scrape belongs to the user
		const scrape = await prisma.scrape.findFirst({
			where: {
				id: scrapeId,
				userId,
			},
		});

		if (!scrape) {
			return NextResponse.json(
				{ error: "Scrape not found or unauthorized" },
				{ status: 404 },
			);
		}

		// Get all enhancements for this scrape
		const enhancements = await prisma.enhancement.findMany({
			where: {
				scrapeId,
			},
			orderBy: {
				createdAt: "desc",
			},
			include: {
				columns: {
					orderBy: {
						order: "asc",
					},
				},
				_count: {
					select: {
						results: true,
					},
				},
			},
		});

		return NextResponse.json({
			enhancements,
		});
	} catch (error) {
		console.error("Error fetching enhancements:", error);
		return NextResponse.json(
			{ error: "Failed to fetch enhancements" },
			{ status: 500 },
		);
	}
}
