import { getUserId } from "@/echo";
import { prisma } from "@/lib/db";
import { tasks } from "@trigger.dev/sdk/v3";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const ApprovalSchema = z.object({
  columns: z
    .array(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        description: z.string().optional(),
        weight: z.number().min(0).max(10).optional(),
      }),
    )
    .optional(),
});

interface RouteParams {
  params: Promise<{
    enhancementId: string;
  }>;
}

// POST /api/enhancements/[enhancementId]/approve - Approve columns and start processing
export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const { enhancementId } = await params;
    const body = await request.json();
    const { columns: columnUpdates } = ApprovalSchema.parse(body);

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

    if (enhancement.status !== "pending_approval") {
      return NextResponse.json(
        { error: "Enhancement is not awaiting approval" },
        { status: 400 },
      );
    }

    // Update column details if provided
    if (columnUpdates) {
      for (const update of columnUpdates) {
        const updateData: any = {};
        if (update.name !== undefined) updateData.name = update.name;
        if (update.description !== undefined)
          updateData.description = update.description;
        if (update.weight !== undefined) updateData.weight = update.weight;

        if (Object.keys(updateData).length > 0) {
          await prisma.enhancementColumn.update({
            where: { id: update.id },
            data: updateData,
          });
        }
      }
    }

    // Update status to processing immediately
    await prisma.enhancement.update({
      where: { id: enhancementId },
      data: { status: "processing" },
    });

    // Trigger the processing task
    const { processEnhancementListings } = await import(
      "@/trigger/semantic-enhancer"
    );
    const handle = await tasks.trigger<typeof processEnhancementListings>(
      "process-enhancement-listings",
      {
        enhancementId,
        scrapeId: enhancement.scrapeId,
      },
    );

    // Update with task ID
    await prisma.enhancement.update({
      where: { id: enhancementId },
      data: { taskId: handle.id },
    });

    return NextResponse.json({
      message: "Enhancement approved and processing started",
      taskId: handle.id,
      enhancementId,
    });
  } catch (error) {
    console.error("Error approving enhancement:", error);

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
      { error: "Failed to approve enhancement" },
      { status: 500 },
    );
  }
}

