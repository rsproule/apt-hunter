import { getUserId } from "@/echo";
import { ApifyWorkflowRequestSchema } from "@/lib/apify-actors";
import { ApifyEnvSchema } from "@/lib/apify-schemas";
import { prisma } from "@/lib/db";
import { runApifyTask } from "@/trigger/apify-scraper";
import { tasks } from "@trigger.dev/sdk/v3";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// This is the route handler that triggers the Trigger.dev task
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request against our actor schemas
    const validatedRequest = ApifyWorkflowRequestSchema.parse(body);

    // Validate environment
    ApifyEnvSchema.parse(process.env);

    // Get userId from Echo session
    const userId = await getUserId();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Determine search type and query
    const searchType =
      validatedRequest.actorId === "maxcopell/zillow-zip-search"
        ? "zipcode"
        : "url";
    const searchQuery = validatedRequest.input;

    // Create the scrape record immediately
    const scrape = await prisma.scrape.create({
      data: {
        userId,
        searchType,
        searchQuery,
        apifyRunId: "pending", // Will be updated by the task
        status: "pending",
      },
    });

    // Trigger the task - it will run in the background
    const handle = await tasks.trigger<typeof runApifyTask>("apify-scraper", {
      ...validatedRequest,
      userId,
      searchType,
      searchQuery,
      scrapeId: scrape.id, // Pass the scrape ID to the task
    });

    // Update the scrape with the task ID
    await prisma.scrape.update({
      where: { id: scrape.id },
      data: {
        taskId: handle.id,
      },
    });

    // Return immediately so the UI can redirect
    return NextResponse.json({
      taskId: handle.id,
      scrapeId: scrape.id,
      message: "Task triggered successfully",
    });
  } catch (error) {
    console.error("Error triggering Apify task:", error);

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
      { error: "Failed to trigger task" },
      { status: 500 },
    );
  }
}
