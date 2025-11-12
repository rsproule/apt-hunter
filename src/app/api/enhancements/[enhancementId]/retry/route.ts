import { getUserId } from "@/echo";
import { prisma } from "@/lib/db";
import { tasks } from "@trigger.dev/sdk/v3";
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{
    enhancementId: string;
  }>;
}

// POST /api/enhancements/[enhancementId]/retry - Retry a failed enhancement
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
      include: {
        scrape: true,
        columns: true,
      },
    });

    if (!enhancement) {
      return NextResponse.json(
        { error: "Enhancement not found or unauthorized" },
        { status: 404 },
      );
    }

    // Delete existing results to start fresh (including individual values)
    await prisma.enhancementResult.deleteMany({
      where: { enhancementId },
    });

    // Delete columns to regenerate them fresh
    await prisma.enhancementColumn.deleteMany({
      where: { enhancementId },
    });

    // Reset enhancement status
    await prisma.enhancement.update({
      where: { id: enhancementId },
      data: {
        status: "pending",
        error: null,
        completedAt: null,
        processedCount: 0,
      },
    });

    // Trigger the semantic enhancement task again (will regenerate columns)
    const { runSemanticEnhancement } = await import(
      "@/trigger/semantic-enhancer"
    );
    const handle = await tasks.trigger<typeof runSemanticEnhancement>(
      "semantic-enhancer",
      {
        enhancementId: enhancement.id,
        scrapeId: enhancement.scrapeId,
        query: enhancement.query,
        userId: enhancement.userId,
      },
    );

    // Update with new task ID
    await prisma.enhancement.update({
      where: { id: enhancementId },
      data: {
        taskId: handle.id,
      },
    });

    return NextResponse.json({
      message: "Enhancement retry triggered successfully",
      taskId: handle.id,
    });
  } catch (error) {
    console.error("Error retrying enhancement:", error);
    return NextResponse.json(
      { error: "Failed to retry enhancement" },
      { status: 500 },
    );
  }
}

