import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

// GET /api/saved-queries/[id] - Get a specific saved query
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const userId = request.headers.get("x-echo-user-id");
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const savedQuery = await prisma.savedQuery.findFirst({
      where: {
        id,
        userId,
      },
      include: {
        _count: {
          select: {
            responses: true,
          },
        },
      },
    });

    if (!savedQuery) {
      return NextResponse.json(
        { error: "Saved query not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ savedQuery });
  } catch (error) {
    console.error("Error fetching saved query:", error);
    return NextResponse.json(
      { error: "Failed to fetch saved query" },
      { status: 500 },
    );
  }
}

// PATCH /api/saved-queries/[id] - Update a saved query
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const userId = request.headers.get("x-echo-user-id");
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      name,
      description,
      searchType,
      searchQuery,
      enhancementQuery,
      columnWeights,
    } = body;

    // Verify ownership
    const existing = await prisma.savedQuery.findFirst({
      where: { id, userId },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "Saved query not found" },
        { status: 404 },
      );
    }

    const savedQuery = await prisma.savedQuery.update({
      where: { id },
      data: {
        ...(name !== undefined && { name }),
        ...(description !== undefined && { description }),
        ...(searchType !== undefined && { searchType }),
        ...(searchQuery !== undefined && { searchQuery }),
        ...(enhancementQuery !== undefined && { enhancementQuery }),
        ...(columnWeights !== undefined && { columnWeights }),
      },
    });

    return NextResponse.json({ savedQuery });
  } catch (error) {
    console.error("Error updating saved query:", error);
    return NextResponse.json(
      { error: "Failed to update saved query" },
      { status: 500 },
    );
  }
}

// DELETE /api/saved-queries/[id] - Delete a saved query
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const userId = request.headers.get("x-echo-user-id");
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verify ownership
    const existing = await prisma.savedQuery.findFirst({
      where: { id, userId },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "Saved query not found" },
        { status: 404 },
      );
    }

    await prisma.savedQuery.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting saved query:", error);
    return NextResponse.json(
      { error: "Failed to delete saved query" },
      { status: 500 },
    );
  }
}


