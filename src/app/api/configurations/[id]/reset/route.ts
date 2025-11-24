import { type NextRequest, NextResponse } from "next/server";
import { getUserId } from "@/echo";
import { prisma } from "@/lib/db";

interface RouteParams {
	params: Promise<{
		id: string;
	}>;
}

// DELETE /api/configurations/[id]/reset - Clear all non-like responses (pass and dislike)
export async function DELETE(request: NextRequest, { params }: RouteParams) {
	try {
		const { id } = await params;
		const userId = await getUserId();
		if (!userId) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		// Verify configuration belongs to user
		const configuration = await prisma.searchConfiguration.findFirst({
			where: { id, userId },
		});

		if (!configuration) {
			return NextResponse.json(
				{ error: "Configuration not found" },
				{ status: 404 },
			);
		}

		// Delete all non-like responses (pass and dislike)
		const result = await prisma.userListingResponse.deleteMany({
			where: {
				configurationId: id,
				userId,
				response: {
					in: ["dislike", "pass"],
				},
			},
		});

		return NextResponse.json({
			success: true,
			deletedCount: result.count,
			message: `Cleared ${result.count} non-liked responses. You can review them again!`,
		});
	} catch (error) {
		console.error("Error resetting responses:", error);
		return NextResponse.json(
			{ error: "Failed to reset responses" },
			{ status: 500 },
		);
	}
}
