import { type NextRequest, NextResponse } from "next/server";
import { getUserId } from "@/echo";
import { prisma } from "@/lib/db";

interface RouteParams {
	params: Promise<{
		id: string;
	}>;
}

// PATCH /api/searches/[id] - Update search (e.g., toggle daily cron)
export async function PATCH(request: NextRequest, { params }: RouteParams) {
	try {
		const { id } = await params;
		const userId = await getUserId();

		if (!userId) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const body = await request.json();
		const { enabledForDailyCron } = body;

		// Verify search belongs to user
		const search = await prisma.searchConfiguration.findFirst({
			where: {
				id,
				userId,
			},
		});

		if (!search) {
			return NextResponse.json({ error: "Search not found" }, { status: 404 });
		}

		// Update the search
		const updated = await prisma.searchConfiguration.update({
			where: { id },
			data: {
				enabledForDailyCron:
					enabledForDailyCron !== undefined
						? enabledForDailyCron
						: search.enabledForDailyCron,
			},
		});

		return NextResponse.json({
			success: true,
			search: updated,
		});
	} catch (error) {
		console.error("Error updating search:", error);
		return NextResponse.json(
			{ error: "Failed to update search" },
			{ status: 500 },
		);
	}
}
