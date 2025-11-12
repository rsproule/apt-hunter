import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// GET /api/listings/liked - Get all liked listings for a saved query
export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get("x-echo-user-id");
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const savedQueryId = searchParams.get("savedQueryId");
    const page = Number.parseInt(searchParams.get("page") || "1", 10);
    const limit = Number.parseInt(searchParams.get("limit") || "25", 10);
    const skip = (page - 1) * limit;

    if (!savedQueryId) {
      return NextResponse.json(
        { error: "savedQueryId is required" },
        { status: 400 },
      );
    }

    // Verify saved query belongs to user
    const savedQuery = await prisma.savedQuery.findFirst({
      where: { id: savedQueryId, userId },
    });

    if (!savedQuery) {
      return NextResponse.json(
        { error: "Saved query not found" },
        { status: 404 },
      );
    }

    // Get total count of liked listings
    const totalCount = await prisma.userListingResponse.count({
      where: {
        savedQueryId,
        response: "like",
      },
    });

    // Fetch liked listings with pagination
    const responses = await prisma.userListingResponse.findMany({
      where: {
        savedQueryId,
        response: "like",
      },
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: limit,
    });

    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json({
      responses,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages,
      },
    });
  } catch (error) {
    console.error("Error fetching liked listings:", error);
    return NextResponse.json(
      { error: "Failed to fetch liked listings" },
      { status: 500 },
    );
  }
}


