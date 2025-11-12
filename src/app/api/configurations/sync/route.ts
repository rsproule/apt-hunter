import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { getUserId } from "@/echo";

// POST /api/configurations/sync - Auto-create or update configuration for scrape + enhancement
export async function POST(request: NextRequest) {
  try {
    const userId = await getUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { scrapeId, enhancementId, columnWeights } = body;

    if (!scrapeId || !enhancementId) {
      return NextResponse.json(
        { error: "scrapeId and enhancementId are required" },
        { status: 400 },
      );
    }

    // Check if configuration already exists for this scrape + enhancement
    let configuration = await prisma.searchConfiguration.findFirst({
      where: {
        scrapeId,
        enhancementId,
        userId,
      },
    });

    if (configuration) {
      // Update existing configuration
      configuration = await prisma.searchConfiguration.update({
        where: { id: configuration.id },
        data: {
          columnWeights: columnWeights || {},
          updatedAt: new Date(),
        },
      });
    } else {
      // Create new configuration
      configuration = await prisma.searchConfiguration.create({
        data: {
          userId,
          scrapeId,
          enhancementId,
          columnWeights: columnWeights || {},
        },
      });
    }

    return NextResponse.json({ configuration });
  } catch (error) {
    console.error("Error syncing configuration:", error);
    return NextResponse.json(
      { error: "Failed to sync configuration" },
      { status: 500 },
    );
  }
}

