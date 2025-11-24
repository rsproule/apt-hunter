import { type NextRequest, NextResponse } from "next/server";
import { getUserId } from "@/echo";
import { prisma } from "@/lib/db";

// POST /api/listings/respond - Save user response to a listing
export async function POST(request: NextRequest) {
	try {
		const userId = await getUserId();
		if (!userId) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const body = await request.json();
		const { configurationId, listingId, response, notes } = body;

		// Validate required fields
		if (!configurationId || !listingId || !response) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 },
			);
		}

		// Validate response value
		if (!["like", "dislike", "pass"].includes(response)) {
			return NextResponse.json(
				{ error: 'Response must be "like", "dislike", or "pass"' },
				{ status: 400 },
			);
		}

		// Verify configuration belongs to user
		const configuration = await prisma.searchConfiguration.findFirst({
			where: { id: configurationId, userId },
		});

		if (!configuration) {
			return NextResponse.json(
				{ error: "Configuration not found" },
				{ status: 404 },
			);
		}

		// Verify listing exists
		const listing = await prisma.listing.findUnique({
			where: { id: listingId },
		});

		if (!listing) {
			return NextResponse.json({ error: "Listing not found" }, { status: 404 });
		}

		// Upsert the response (update if exists, create if not)
		const userResponse = await prisma.userListingResponse.upsert({
			where: {
				configurationId_listingId: {
					configurationId,
					listingId,
				},
			},
			update: {
				response,
				notes,
			},
			create: {
				userId,
				configurationId,
				listingId,
				response,
				notes,
			},
		});

		return NextResponse.json({ response: userResponse });
	} catch (error) {
		console.error("Error saving listing response:", error);
		return NextResponse.json(
			{ error: "Failed to save response" },
			{ status: 500 },
		);
	}
}
