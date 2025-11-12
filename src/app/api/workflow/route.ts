import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { tasks } from "@trigger.dev/sdk/v3";
import type { runApifyTask } from "@/trigger/apify-scraper";
import type { runSemanticEnhancement } from "@/trigger/semantic-enhancer";
import type { ApifyActorId } from "@/lib/apify-actors";
import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import { getUserId } from "@/echo";

const openai = createOpenAI({
  apiKey: process.env.ECHO_API_KEY,
  baseURL: "https://echo.router.merit.systems",
});

// POST /api/workflow - Create and run complete search workflow
export async function POST(request: NextRequest) {
  try {
    const userId = await getUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { searchUrl, enhancementQuery } = body;

    // Validate required fields
    if (!searchUrl || !enhancementQuery) {
      return NextResponse.json(
        { error: "searchUrl and enhancementQuery are required" },
        { status: 400 },
      );
    }

    // Generate a nice name for the query using AI
    console.log("Generating query name...");
    const nameResult = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: `Generate a short, descriptive name (max 60 characters) for this apartment search query.
Search URL: ${searchUrl}
Enhancement preferences: ${enhancementQuery}

The name should be concise and capture the essence of what the user is looking for.
Examples:
- "Pet-Friendly 2BR in Brooklyn"
- "Modern Apartments Near Transit"
- "Luxury Downtown Lofts"

Just return the name, nothing else.`,
    });

    const queryName = nameResult.text.trim().replace(/^["']|["']$/g, ""); // Remove quotes if AI adds them

    console.log(`Generated query name: ${queryName}`);

    // Create the saved query
    const savedQuery = await prisma.savedQuery.create({
      data: {
        userId,
        name: queryName,
        searchType: "url",
        searchQuery: {
          searchUrls: [searchUrl],
        },
        enhancementQuery,
        columnWeights: {},
      },
    });

    console.log(`Created saved query: ${savedQuery.id}`);

    // Create a scrape record
    const scrape = await prisma.scrape.create({
      data: {
        userId,
        name: `${queryName} - ${new Date().toLocaleDateString()}`,
        searchType: "url",
        searchQuery: {
          searchUrls: [searchUrl],
        },
        apifyRunId: `pending-${Date.now()}`,
        status: "pending",
      },
    });

    console.log(`Created scrape: ${scrape.id}`);

    // Trigger the scraper task
    const scrapeHandle = await tasks.trigger<typeof runApifyTask>(
      "apify-scraper",
      {
        actorId: "maxcopell/zillow-scraper" as ApifyActorId,
        input: {
          searchUrls: [{ url: searchUrl }],
        },
        scrapeId: scrape.id,
        userId,
        searchType: "url",
        searchQuery: {
          searchUrls: [{ url: searchUrl }],
        },
      },
    );

    console.log(`Triggered scraper task: ${scrapeHandle.id}`);

    // Update scrape with task ID
    await prisma.scrape.update({
      where: { id: scrape.id },
      data: {
        taskId: scrapeHandle.id,
        status: "running",
      },
    });

    // Create enhancement record
    const enhancement = await prisma.enhancement.create({
      data: {
        scrapeId: scrape.id,
        userId,
        query: enhancementQuery,
        status: "pending",
      },
    });

    console.log(`Created enhancement: ${enhancement.id}`);

    // Trigger the enhancement task (it will wait for scrape to complete if needed)
    const enhancementHandle = await tasks.trigger<typeof runSemanticEnhancement>(
      "semantic-enhancer",
      {
        enhancementId: enhancement.id,
        scrapeId: scrape.id,
        query: enhancementQuery,
        userId,
      },
    );

    console.log(`Triggered enhancement task: ${enhancementHandle.id}`);

    // Update enhancement with task ID
    await prisma.enhancement.update({
      where: { id: enhancement.id },
      data: {
        taskId: enhancementHandle.id,
      },
    });

    // Update saved query with the scrape reference
    await prisma.savedQuery.update({
      where: { id: savedQuery.id },
      data: {
        lastRunAt: new Date(),
        lastScrapeId: scrape.id,
      },
    });

    return NextResponse.json({
      success: true,
      savedQuery: {
        id: savedQuery.id,
        name: queryName,
      },
      scrape: {
        id: scrape.id,
        status: scrape.status,
      },
      enhancement: {
        id: enhancement.id,
        status: enhancement.status,
      },
      message: "Workflow started successfully. Scraping and enhancement are running in the background.",
    });
  } catch (error) {
    console.error("Error starting workflow:", error);
    return NextResponse.json(
      {
        error: "Failed to start workflow",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

