import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { getUserId } from "@/echo";

// GET /api/configurations - List all search configurations for the user
export async function GET(request: NextRequest) {
  try {
    const userId = await getUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const configurations = await prisma.searchConfiguration.findMany({
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

    return NextResponse.json({ configurations });
  } catch (error) {
    console.error("Error fetching configurations:", error);
    return NextResponse.json(
      { error: "Failed to fetch configurations" },
      { status: 500 },
    );
  }
}

