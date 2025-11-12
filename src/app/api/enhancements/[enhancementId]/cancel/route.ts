import { getUserId } from "@/echo";
import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{
    enhancementId: string;
  }>;
}

// POST /api/enhancements/[enhancementId]/cancel - Cancel a running enhancement
export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const { enhancementId } = await params;

    // Get userId from Echo session
    const userId = await getUserId();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verify enhancement belongs to user
    const enhancement = await prisma.enhancement.findFirst({
      where: {
        id: enhancementId,
        userId,
      },
    });

    if (!enhancement) {
      return NextResponse.json(
        { error: "Enhancement not found or unauthorized" },
        { status: 404 },
      );
    }

    // Only allow canceling pending or processing enhancements
    if (enhancement.status !== "pending" && enhancement.status !== "processing") {
      return NextResponse.json(
        { error: "Can only cancel pending or processing enhancements" },
        { status: 400 },
      );
    }

    // Mark as failed with cancel message
    await prisma.enhancement.update({
      where: { id: enhancementId },
      data: {
        status: "failed",
        error: "Canceled by user",
        completedAt: new Date(),
      },
    });

    // Note: We can't actually stop the Trigger.dev job from here
    // But marking it as failed will stop the frontend from polling
    // and the job will eventually complete and see it's already marked as failed

    return NextResponse.json({
      message: "Enhancement canceled successfully",
    });
  } catch (error) {
    console.error("Error canceling enhancement:", error);
    return NextResponse.json(
      { error: "Failed to cancel enhancement" },
      { status: 500 },
    );
  }
}

