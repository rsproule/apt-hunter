import { NextRequest, NextResponse } from "next/server";
import { tasks } from "@trigger.dev/sdk/v3";
import type { runAllSearches } from "@/trigger/search-runner";

// Vercel cron job secret for authentication
const CRON_SECRET = process.env.CRON_SECRET;

// POST /api/cron/run-searches - Trigger the search runner task
export async function POST(request: NextRequest) {
  try {
    // Verify this is a legitimate cron request
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log("🔄 Starting cron job: run-searches");

    // Trigger the main search runner task
    const handle = await tasks.trigger<typeof runAllSearches>(
      "run-all-searches",
      {},
    );

    console.log(`✅ Triggered search runner task: ${handle.id}`);

    return NextResponse.json({
      success: true,
      taskId: handle.id,
      message: "Search runner task triggered successfully",
    });
  } catch (error) {
    console.error("❌ Cron job error:", error);
    return NextResponse.json(
      {
        error: "Failed to run cron job",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

