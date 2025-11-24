import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { getUserId } from "@/echo";

// GET /api/searches - List all searches for the user
export async function GET(request: NextRequest) {
  try {
    const userId = await getUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const searches = await prisma.searchConfiguration.findMany({
      where: { userId },
      orderBy: { updatedAt: "desc" },
      include: {
        scrape: true,
        enhancement: {
          select: {
            id: true,
            query: true,
            status: true,
          },
        },
        _count: {
          select: {
            userResponses: true,
          },
        },
      },
    });

    return NextResponse.json({ searches });
  } catch (error) {
    console.error("Error fetching searches:", error);
    return NextResponse.json(
      { error: "Failed to fetch searches" },
      { status: 500 },
    );
  }
}
