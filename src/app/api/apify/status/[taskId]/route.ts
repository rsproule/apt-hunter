import { runs } from "@trigger.dev/sdk/v3";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ taskId: string }> },
) {
	try {
		const { taskId } = await params;

		// Get the run status from Trigger.dev
		const run = await runs.retrieve(taskId);

		return NextResponse.json({
			id: run.id,
			status: run.status,
			output: run.output,
			isCompleted: run.isCompleted,
			isSuccess: run.isSuccess,
			isFailed: run.isFailed,
			startedAt: run.startedAt,
			completedAt: run.finishedAt || null, // Use finishedAt instead of completedAt
		});
	} catch (error) {
		console.error("Error checking task status:", error);
		return NextResponse.json(
			{ error: "Failed to retrieve task status" },
			{ status: 500 },
		);
	}
}
