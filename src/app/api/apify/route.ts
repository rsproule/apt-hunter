import { ApifyWorkflowRequestSchema } from "@/lib/apify-actors";
import { ApifyEnvSchema } from "@/lib/apify-schemas";
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

    // Trigger the task - it will run in the background
    const handle = await tasks.trigger<typeof runApifyTask>(
      "apify-scraper",
      validatedRequest,
    );

    // Return the task handle so the client can poll for results
    return NextResponse.json({
      taskId: handle.id,
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
