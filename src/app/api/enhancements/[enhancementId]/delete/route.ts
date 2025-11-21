import { getUserId } from "@/echo";
import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{
    enhancementId: string;
  }>;
}

// DELETE /api/enhancements/[enhancementId]/delete - Delete an enhancement
export async function DELETE(request: NextRequest, { params }: RouteParams) {
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

    // Delete the enhancement (cascade will handle columns and results)
    await prisma.enhancement.delete({
      where: { id: enhancementId },
    });

    return NextResponse.json({
      message: "Enhancement deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting enhancement:", error);
    return NextResponse.json(
      { error: "Failed to delete enhancement" },
      { status: 500 },
    );
  }
}





