import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// POST /api/listings/respond - Save user response to a listing
export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get("x-echo-user-id");
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { savedQueryId, listingId, response, notes } = body;

    // Validate required fields
    if (!savedQueryId || !listingId || !response) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Validate response value
    if (!["like", "dislike"].includes(response)) {
      return NextResponse.json(
        { error: 'Response must be "like" or "dislike"' },
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

    // Verify listing exists
    const listing = await prisma.listing.findUnique({
      where: { id: listingId },
    });

    if (!listing) {
      return NextResponse.json(
        { error: "Listing not found" },
        { status: 404 },
      );
    }

    // Upsert the response (update if exists, create if not)
    const userResponse = await prisma.userListingResponse.upsert({
      where: {
        savedQueryId_listingId: {
          savedQueryId,
          listingId,
        },
      },
      update: {
        response,
        notes,
      },
      create: {
        userId,
        savedQueryId,
        listingId,
        response,
        notes,
      },
    });

    return NextResponse.json({ response: userResponse });
  } catch (error) {
    console.error("Error saving listing response:", error);
    return NextResponse.json(
      { error: "Failed to save response" },
      { status: 500 },
    );
  }
}



