import { getUserId } from "@/echo";
import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{
    columnId: string;
  }>;
}

// DELETE /api/enhancements/columns/[columnId] - Delete a column before approval
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { columnId } = await params;

    // Get userId from Echo session
    const userId = await getUserId();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get the column and verify ownership
    const column = await prisma.enhancementColumn.findUnique({
      where: { id: columnId },
      include: {
        enhancement: true,
      },
    });

    if (!column) {
      return NextResponse.json(
        { error: "Column not found" },
        { status: 404 },
      );
    }

    if (column.enhancement.userId !== userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Only allow deletion if enhancement is pending approval
    if (column.enhancement.status !== "pending_approval") {
      return NextResponse.json(
        { error: "Can only delete columns during approval phase" },
        { status: 400 },
      );
    }

    // Delete the column
    await prisma.enhancementColumn.delete({
      where: { id: columnId },
    });

    return NextResponse.json({
      message: "Column deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting column:", error);
    return NextResponse.json(
      { error: "Failed to delete column" },
      { status: 500 },
    );
  }
}


