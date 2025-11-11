import {
  ApifyEnvSchema,
  DownloadResultsSchema,
  GetResultsQuerySchema,
} from "@/lib/apify-schemas";
import { ApifyClient } from "apify-client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const queryParams = Object.fromEntries(searchParams.entries());
    const { runId } = GetResultsQuerySchema.parse(queryParams);

    const env = ApifyEnvSchema.parse(process.env);
    const client = new ApifyClient({ token: env.APIFY_TOKEN });

    // Get run info using SDK
    const run = await client.run(runId).get();
    if (!run) {
      throw new Error("Run not found");
    }

    const status = run.status;

    // If run is not finished, return status
    if (status !== "SUCCEEDED") {
      return NextResponse.json({
        success: true,
        status: status,
        finished: false,
        message: `Task is ${status.toLowerCase()}`,
      });
    }

    // Get the results from the default dataset using SDK
    const { items } = await client.run(runId).dataset().listItems();

    return NextResponse.json({
      success: true,
      status: status,
      finished: true,
      results: items,
      count: items.length,
    });
  } catch (error) {
    console.error("Error fetching Apify results:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : "Validation failed" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Failed to fetch results" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { runId, format } = DownloadResultsSchema.parse(body);

    const env = ApifyEnvSchema.parse(process.env);
    const client = new ApifyClient({ token: env.APIFY_TOKEN });

    // Get the results using SDK
    const { items } = await client.run(runId).dataset().listItems();

    const contentType = format === "csv" ? "text/csv" : "application/json";
    const fileExtension = format === "csv" ? "csv" : "json";

    let data: string;
    if (format === "csv") {
      // Convert JSON to CSV
      if (items.length === 0) {
        data = "";
      } else {
        const headers = Object.keys(items[0]).join(",");
        const rows = items.map((item: Record<string, any>) =>
          Object.values(item)
            .map((value) =>
              typeof value === "string" && value.includes(",")
                ? `"${value.replace(/"/g, '""')}"`
                : value,
            )
            .join(","),
        );
        data = [headers, ...rows].join("\n");
      }
    } else {
      data = JSON.stringify(items, null, 2);
    }

    return new NextResponse(data, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="zillow-results-${runId}.${fileExtension}"`,
      },
    });
  } catch (error) {
    console.error("Error downloading Apify results:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : "Validation failed" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Failed to download results" },
      { status: 500 },
    );
  }
}
