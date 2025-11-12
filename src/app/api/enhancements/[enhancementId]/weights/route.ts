import { getUserId } from "@/echo";
import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const WeightsUpdateSchema = z.object({
  weights: z.array(
    z.object({
      columnId: z.string(),
      weight: z.number().min(0).max(10),
    }),
  ),
});

interface RouteParams {
  params: Promise<{
    enhancementId: string;
  }>;
}

// PATCH /api/enhancements/[enhancementId]/weights - Update column weights and recalculate scores
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const { enhancementId } = await params;
    const body = await request.json();
    const { weights } = WeightsUpdateSchema.parse(body);

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
        columns: true,
      },
    });

    if (!enhancement) {
      return NextResponse.json(
        { error: "Enhancement not found or unauthorized" },
        { status: 404 },
      );
    }

    // Update column weights
    for (const { columnId, weight } of weights) {
      await prisma.enhancementColumn.update({
        where: { id: columnId },
        data: { weight },
      });
    }

    // Recalculate composite scores for all enhancement results
    const enhancementResults = await prisma.enhancementResult.findMany({
      where: {
        enhancementId,
        status: "completed",
      },
    });

    // Fetch fresh column data
    const updatedColumns = await prisma.enhancementColumn.findMany({
      where: { enhancementId },
    });

    // Recalculate each result
    for (const result of enhancementResults) {
      const values = result.values as Record<string, number>;

      let compositeScore = 0;
      let totalAbsWeight = 0;

      for (const column of updatedColumns) {
        const value = values[column.name];
        const weight = column.weight;

        if (value !== undefined && value !== null) {
          // All values are now 1-10 scores where 10 = matches user preference
          const normalizedValue = Number(value);

          // Simple weighted average - no inversion needed
          compositeScore += normalizedValue * weight;
          totalAbsWeight += weight;
        }
      }

      // Average the weighted scores
      const finalScore = totalAbsWeight > 0 ? compositeScore / totalAbsWeight : 0;

      // Update the composite score
      await prisma.enhancementResult.update({
        where: { id: result.id },
        data: { compositeScore: finalScore },
      });
    }

    return NextResponse.json({
      message: "Weights updated and scores recalculated",
      updatedCount: enhancementResults.length,
    });
  } catch (error) {
    console.error("Error updating weights:", error);

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
      { error: "Failed to update weights" },
      { status: 500 },
    );
  }
}

