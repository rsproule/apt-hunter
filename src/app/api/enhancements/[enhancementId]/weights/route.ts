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

    // Create a weight map
    const weightMap = new Map(weights.map((w) => [w.columnId, w.weight]));
    const columnsMap = new Map(
      enhancement.columns.map((c) => [c.id, c]),
    );

    // Recalculate each result
    for (const result of enhancementResults) {
      const values = result.values as Record<string, boolean | number>;

      let compositeScore = 0;
      let totalWeight = 0;

      for (const column of enhancement.columns) {
        const value = values[column.name];
        const weight = weightMap.get(column.id) ?? column.weight;

        if (value !== undefined && value !== null) {
          // Normalize to 0-10 scale
          const normalizedValue =
            typeof value === "boolean" ? (value ? 10 : 0) : Number(value);

          compositeScore += normalizedValue * weight;
          totalWeight += weight;
        }
      }

      // Average the weighted scores
      const finalScore = totalWeight > 0 ? compositeScore / totalWeight : 0;

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

