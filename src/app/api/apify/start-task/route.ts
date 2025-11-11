import { ApifyEnvSchema, SearchRequestSchema } from "@/lib/apify-schemas";
import { ApifyClient } from "apify-client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Default Zillow scraper actor ID
const ZILLOW_ACTOR_ID = "maxcopell/zillow-zip-search";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { zipCodes, priceMax, forRent } = SearchRequestSchema.parse(body);

    const env = ApifyEnvSchema.parse(process.env);
    const client = new ApifyClient({ token: env.APIFY_TOKEN });

    // Build input for the zip code search actor
    const actorInput = {
      forRent,
      forSaleByAgent: !forRent,
      forSaleByOwner: false,
      sold: false,
      zipCodes,
      ...(priceMax && { priceMax }),
    };

    // Start the Apify task using SDK with the zip code input
    const run = await client.actor(ZILLOW_ACTOR_ID).start(actorInput);

    return NextResponse.json({
      success: true,
      runId: run.id,
      status: run.status,
      message: "Task started successfully",
    });
  } catch (error) {
    console.error("Error starting Apify task:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : "Validation failed" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Failed to start task" },
      { status: 500 },
    );
  }
}
