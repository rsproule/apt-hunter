import { createOpenAI } from "@ai-sdk/openai";
import { tasks } from "@trigger.dev/sdk/v3";
import { generateText } from "ai";
import { type NextRequest, NextResponse } from "next/server";
import { getUserId } from "@/echo";
import { prisma } from "@/lib/db";
import type { runSingleSearch } from "@/trigger/search-runner";

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

		// Create scrape, enhancement, and configuration
		const scrape = await prisma.scrape.create({
			data: {
				userId,
				name: queryName,
				searchType: "url",
				searchQuery: {
					searchUrls: [searchUrl],
				},
				apifyRunId: `pending-${Date.now()}`,
				status: "pending",
			},
		});

		const enhancement = await prisma.enhancement.create({
			data: {
				scrapeId: scrape.id,
				userId,
				query: enhancementQuery,
				status: "pending",
			},
		});

		const configuration = await prisma.searchConfiguration.create({
			data: {
				userId,
				name: queryName,
				scrapeId: scrape.id,
				enhancementId: enhancement.id,
				columnWeights: {},
			},
		});

		console.log(`Created search configuration: ${configuration.id}`);

		// Trigger the single search job (handles scrape + enhancement + notifications)
		const handle = await tasks.trigger<typeof runSingleSearch>(
			"run-single-search",
			{
				configurationId: configuration.id,
				userId,
			},
		);

		console.log(`Triggered search job: ${handle.id}`);

		return NextResponse.json({
			success: true,
			configuration: {
				id: configuration.id,
				name: queryName,
			},
			taskId: handle.id,
			message:
				"Search started successfully. Scraping, enhancement, and notifications will run in the background.",
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
