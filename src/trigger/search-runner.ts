import { task, tasks, wait } from "@trigger.dev/sdk/v3";
import type { ApifyActorId } from "@/lib/apify-actors";
import { prisma } from "@/lib/db";
import type { runApifyTask } from "@/trigger/apify-scraper";
import type { runSemanticEnhancement } from "@/trigger/semantic-enhancer";

interface TopListing {
	listingId: string;
	address: string;
	price: number;
	detailUrl: string;
	compositeScore: number;
	rank: number;
}

export const runAllSearches = task({
	id: "run-all-searches",
	maxDuration: 7200, // 2 hours max
	run: async () => {
		console.log("🚀 Starting search runner task");

		// Get all search configurations that are enabled for daily cron
		const configurations = await prisma.searchConfiguration.findMany({
			where: {
				enabledForDailyCron: true,
			},
			include: {
				scrape: true,
				enhancement: {
					include: {
						columns: true,
					},
				},
			},
		});

		console.log(
			`📊 Found ${configurations.length} enabled pipelines to process`,
		);

		const results = [];

		for (const config of configurations) {
			let scrape: any = null;
			try {
				console.log(
					`\n🔍 Processing configuration: ${config.id} (${config.name || "Unnamed"})`,
				);

				// Get the original search query from the scrape
				const searchQuery = config.scrape.searchQuery as any;
				const searchType = config.scrape.searchType;

				// Create a new scrape for this run
				scrape = await prisma.scrape.create({
					data: {
						userId: config.userId,
						name: `${config.name || "Auto"} - ${new Date().toISOString()}`,
						searchType,
						searchQuery,
						apifyRunId: `pending-${Date.now()}`,
						status: "pending",
					},
				});

				console.log(`  ✅ Created new scrape: ${scrape.id}`);

				// Trigger the scraper task
				let scrapeHandle;
				if (searchType === "url") {
					const urls = searchQuery.searchUrls || [];
					// Ensure URLs are in correct format: [{ url: "..." }]
					const formattedUrls = urls.map((u: any) =>
						typeof u === "string" ? { url: u } : u,
					);

					scrapeHandle = await tasks.trigger<typeof runApifyTask>(
						"apify-scraper",
						{
							actorId: "maxcopell/zillow-scraper" as ApifyActorId,
							input: {
								searchUrls: formattedUrls,
							},
							scrapeId: scrape.id,
							userId: config.userId,
							searchType: "url",
							searchQuery,
						},
					);
				} else if (searchType === "zipcode") {
					const zipcodes = searchQuery.zipcodes || [];
					scrapeHandle = await tasks.trigger<typeof runApifyTask>(
						"apify-scraper",
						{
							actorId: "maxcopell/zillow-scraper" as ApifyActorId,
							input: {
								zipcodes,
							},
							scrapeId: scrape.id,
							userId: config.userId,
							searchType: "zipcode",
							searchQuery,
						},
					);
				}

				if (!scrapeHandle) {
					throw new Error("Failed to trigger scraper task");
				}

				await prisma.scrape.update({
					where: { id: scrape.id },
					data: {
						taskId: scrapeHandle.id,
						status: "running",
					},
				});

				console.log(`  ✅ Triggered scraper: ${scrapeHandle.id}`);

				// Create enhancement record
				const enhancement = await prisma.enhancement.create({
					data: {
						scrapeId: scrape.id,
						userId: config.userId,
						query: config.enhancement.query,
						status: "pending",
					},
				});

				console.log(`  ✅ Created enhancement: ${enhancement.id}`);

				// Trigger the enhancement task (it will wait for scrape to complete)
				const enhancementHandle = await tasks.trigger<
					typeof runSemanticEnhancement
				>("semantic-enhancer", {
					enhancementId: enhancement.id,
					scrapeId: scrape.id,
					query: config.enhancement.query,
					userId: config.userId,
				});

				await prisma.enhancement.update({
					where: { id: enhancement.id },
					data: {
						taskId: enhancementHandle.id,
					},
				});

				console.log(`  ✅ Triggered enhancement: ${enhancementHandle.id}`);

				// Wait for enhancement to complete (with timeout)
				console.log(`  ⏳ Waiting for enhancement to complete...`);
				const MAX_WAIT_TIME = 60 * 60 * 1000; // 1 hour
				const POLL_INTERVAL = 30000; // 30 seconds
				const startTime = Date.now();

				let enhancementComplete = false;
				while (Date.now() - startTime < MAX_WAIT_TIME) {
					const enhancementStatus = await prisma.enhancement.findUnique({
						where: { id: enhancement.id },
					});

					if (!enhancementStatus) {
						throw new Error(`Enhancement ${enhancement.id} not found`);
					}

					if (enhancementStatus.status === "completed") {
						console.log(`  ✅ Enhancement completed successfully`);
						enhancementComplete = true;
						break;
					}

					if (enhancementStatus.status === "failed") {
						throw new Error(
							`Enhancement ${enhancement.id} failed: ${enhancementStatus.error || "Unknown error"}`,
						);
					}

					// Still processing, wait before checking again
					console.log(
						`  ⏳ Enhancement status: ${enhancementStatus.status}, waiting...`,
					);
					await wait.for({ seconds: POLL_INTERVAL / 1000 });
				}

				if (!enhancementComplete) {
					console.warn(
						`  ⚠️  Enhancement ${enhancement.id} did not complete in time - skipping notifications`,
					);
					results.push({
						configurationId: config.id,
						configurationName: config.name,
						scrapeId: scrape.id,
						enhancementId: enhancement.id,
						notificationsSent: 0,
						status: "timeout",
						error: "Enhancement did not complete in time",
					});
					continue;
				}

				// Check if scrape has any listings
				const scrapeListingCount = await prisma.scrapeListing.count({
					where: { scrapeId: scrape.id },
				});

				if (scrapeListingCount === 0) {
					console.log(
						`  ℹ️  No listings found in scrape - skipping notifications`,
					);
					results.push({
						configurationId: config.id,
						configurationName: config.name,
						scrapeId: scrape.id,
						enhancementId: enhancement.id,
						notificationsSent: 0,
						status: "completed",
						message: "No listings found",
					});
					continue;
				}

				// Now find the top 2 listings that haven't been sent yet
				console.log(`  🔎 Finding top unsent listings...`);
				const topListings = await getTopUnsentListings(
					config.id,
					enhancement.id,
					2,
				);

				let sentCount = 0;
				for (const listing of topListings) {
					console.log(
						`  📬 Sending notification ${sentCount + 1} for listing to user: ${config.userId}`,
					);
					await sendNotification(config.userId, config.id, listing);

					// Mark this listing as sent
					await prisma.sentNotification.create({
						data: {
							userId: config.userId,
							configurationId: config.id,
							listingId: listing.listingId,
							compositeScore: listing.compositeScore,
							rank: listing.rank,
						},
					});

					sentCount++;
					console.log(`  ✅ Notification ${sentCount} sent and tracked`);
				}

				if (sentCount === 0) {
					console.log(`  ℹ️  No new listings to notify about`);
				} else {
					console.log(`  ✅ Sent ${sentCount} notification(s)`);
				}

				results.push({
					configurationId: config.id,
					configurationName: config.name,
					scrapeId: scrape.id,
					enhancementId: enhancement.id,
					notificationsSent: sentCount,
					status: "completed",
				});
			} catch (error) {
				console.error(
					`  ❌ Error processing configuration ${config.id}:`,
					error,
				);

				// Try to update scrape status to failed if it exists
				if (scrape) {
					try {
						await prisma.scrape.update({
							where: { id: scrape.id },
							data: {
								status: "failed",
								error: error instanceof Error ? error.message : "Unknown error",
							},
						});
					} catch (updateError) {
						console.error(`  ⚠️  Could not update scrape status:`, updateError);
					}
				}

				results.push({
					configurationId: config.id,
					configurationName: config.name,
					status: "error",
					error: error instanceof Error ? error.message : "Unknown error",
				});
			}
		}

		console.log("\n✅ Search runner task completed");
		console.log(`📊 Summary: ${results.length} configurations processed`);

		return {
			success: true,
			totalConfigurations: configurations.length,
			results,
		};
	},
});

// Get top N listings that haven't been sent yet
async function getTopUnsentListings(
	configurationId: string,
	enhancementId: string,
	limit: number = 2,
): Promise<TopListing[]> {
	// Get configuration with weights
	const configuration = await prisma.searchConfiguration.findUnique({
		where: { id: configurationId },
		include: {
			scrape: true,
			enhancement: {
				include: {
					columns: true,
				},
			},
		},
	});

	if (!configuration) {
		throw new Error(`Configuration ${configurationId} not found`);
	}

	// Get already sent listing IDs for this configuration
	const sentNotifications = await prisma.sentNotification.findMany({
		where: { configurationId },
		select: { listingId: true },
	});

	const sentListingIds = sentNotifications.map((n) => n.listingId);
	const sentIdsArray = sentListingIds.length > 0 ? sentListingIds : [""];

	// Calculate composite scores for top N listings, excluding already sent ones
	const rankedListings = await prisma.$queryRaw<
		Array<{
			listingId: string;
			totalCompositeScore: number;
		}>
	>`
    SELECT 
      sl."listingId",
      COALESCE(
        SUM(ev."normalizedValue" * ec.weight) / NULLIF(SUM(ec.weight), 0),
        0
      ) as "totalCompositeScore"
    FROM "ScrapeListing" sl
    LEFT JOIN "EnhancementResult" er ON er."listingId" = sl."listingId"
      AND er."enhancementId" = ${enhancementId}
      AND er.status = 'completed'
    LEFT JOIN "EnhancementValue" ev ON ev."resultId" = er.id
    LEFT JOIN "EnhancementColumn" ec ON ec.id = ev."columnId"
    WHERE sl."scrapeId" = ${configuration.scrape.id}
      AND NOT (sl."listingId" = ANY(${sentIdsArray}::text[]))
    GROUP BY sl."listingId"
    ORDER BY "totalCompositeScore" DESC
    LIMIT ${limit}
  `;

	if (rankedListings.length === 0) {
		return [];
	}

	// Fetch full listing details for all ranked listings
	const results: TopListing[] = [];
	for (let i = 0; i < rankedListings.length; i++) {
		const listingId = rankedListings[i].listingId;
		const listing = await prisma.listing.findUnique({
			where: { id: listingId },
		});

		if (listing) {
			results.push({
				listingId: listing.id,
				address: listing.address,
				price: listing.price,
				detailUrl: listing.detailUrl,
				compositeScore: Number(rankedListings[i].totalCompositeScore),
				rank: i + 1,
			});
		}
	}

	return results;
}

// Send notification via mr-whiskers message endpoint
async function sendNotification(
	userId: string,
	configurationId: string,
	listing: TopListing,
) {
	const MESSAGE_API_URL = "https://mr-whiskers.vercel.app/api/message";
	const ECHO_API_KEY = process.env.ECHO_API_KEY;

	if (!ECHO_API_KEY) {
		throw new Error("ECHO_API_KEY not configured");
	}

	const payload = {
		target: {
			type: "user_id",
			userId,
		},
		source: "apt-hunter",
		payload: {
			title: "🏠 New Apartment Recommendation",
			message: `${listing.address}\n💰 $${listing.price.toLocaleString()}\n⭐ Score: ${listing.compositeScore.toFixed(1)}/10\n🔗 ${listing.detailUrl}`,
			configurationId,
			listing: {
				address: listing.address,
				price: listing.price,
				detailUrl: listing.detailUrl,
				compositeScore: listing.compositeScore,
			},
			timestamp: new Date().toISOString(),
		},
	};

	console.log(`  📤 Sending notification to user ${userId}...`);
	console.log(`  📦 Payload:`, JSON.stringify(payload, null, 2));

	const response = await fetch(MESSAGE_API_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${ECHO_API_KEY}`,
		},
		body: JSON.stringify(payload),
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(
			`Failed to send notification: ${response.status} - ${errorText}`,
		);
	}

	const result = await response.json();
	console.log(`  ✅ Notification sent successfully:`, result);

	return result;
}

// New task: Run a single search configuration (for UI-triggered searches)
export const runSingleSearch = task({
	id: "run-single-search",
	maxDuration: 7200, // 2 hours max
	run: async (payload: { configurationId: string; userId: string }) => {
		const { configurationId, userId } = payload;

		console.log(
			`🚀 Starting single search for configuration: ${configurationId}`,
		);

		// Get the configuration
		const config = await prisma.searchConfiguration.findUnique({
			where: { id: configurationId },
			include: {
				scrape: true,
				enhancement: {
					include: {
						columns: true,
					},
				},
			},
		});

		if (!config) {
			throw new Error(`Configuration ${configurationId} not found`);
		}

		console.log(`📊 Processing: ${config.name || "Unnamed"}`);

		// Get the original search query from the scrape
		const searchQuery = config.scrape.searchQuery as any;
		const searchType = config.scrape.searchType;

		// Create a new scrape for this run
		const scrape = await prisma.scrape.create({
			data: {
				userId,
				name: `${config.name || "Auto"} - ${new Date().toISOString()}`,
				searchType,
				searchQuery,
				apifyRunId: `pending-${Date.now()}`,
				status: "pending",
			},
		});

		console.log(`  ✅ Created new scrape: ${scrape.id}`);

		// Trigger the scraper task
		let scrapeHandle;
		if (searchType === "url") {
			const urls = searchQuery.searchUrls || [];
			// Ensure URLs are in correct format: [{ url: "..." }]
			const formattedUrls = urls.map((u: any) =>
				typeof u === "string" ? { url: u } : u,
			);

			scrapeHandle = await tasks.trigger<typeof runApifyTask>("apify-scraper", {
				actorId: "maxcopell/zillow-scraper" as ApifyActorId,
				input: {
					searchUrls: formattedUrls,
				},
				scrapeId: scrape.id,
				userId,
				searchType: "url",
				searchQuery,
			});
		} else if (searchType === "zipcode") {
			const zipcodes = searchQuery.zipcodes || [];
			scrapeHandle = await tasks.trigger<typeof runApifyTask>("apify-scraper", {
				actorId: "maxcopell/zillow-scraper" as ApifyActorId,
				input: {
					zipcodes,
				},
				scrapeId: scrape.id,
				userId,
				searchType: "zipcode",
				searchQuery,
			});
		}

		if (!scrapeHandle) {
			throw new Error("Failed to trigger scraper task");
		}

		await prisma.scrape.update({
			where: { id: scrape.id },
			data: {
				taskId: scrapeHandle.id,
				status: "running",
			},
		});

		console.log(`  ✅ Triggered scraper: ${scrapeHandle.id}`);

		// Create enhancement record
		const enhancement = await prisma.enhancement.create({
			data: {
				scrapeId: scrape.id,
				userId,
				query: config.enhancement.query,
				status: "pending",
			},
		});

		console.log(`  ✅ Created enhancement: ${enhancement.id}`);

		// Trigger the enhancement task
		const enhancementHandle = await tasks.trigger<
			typeof runSemanticEnhancement
		>("semantic-enhancer", {
			enhancementId: enhancement.id,
			scrapeId: scrape.id,
			query: config.enhancement.query,
			userId,
		});

		await prisma.enhancement.update({
			where: { id: enhancement.id },
			data: {
				taskId: enhancementHandle.id,
			},
		});

		console.log(`  ✅ Triggered enhancement: ${enhancementHandle.id}`);

		// Wait for enhancement to complete
		console.log(`  ⏳ Waiting for enhancement to complete...`);
		const MAX_WAIT_TIME = 60 * 60 * 1000; // 1 hour
		const POLL_INTERVAL = 30000; // 30 seconds
		const startTime = Date.now();

		let enhancementComplete = false;
		while (Date.now() - startTime < MAX_WAIT_TIME) {
			const enhancementStatus = await prisma.enhancement.findUnique({
				where: { id: enhancement.id },
			});

			if (!enhancementStatus) {
				throw new Error(`Enhancement ${enhancement.id} not found`);
			}

			if (enhancementStatus.status === "completed") {
				console.log(`  ✅ Enhancement completed successfully`);
				enhancementComplete = true;
				break;
			}

			if (enhancementStatus.status === "failed") {
				throw new Error(
					`Enhancement ${enhancement.id} failed: ${enhancementStatus.error || "Unknown error"}`,
				);
			}

			console.log(
				`  ⏳ Enhancement status: ${enhancementStatus.status}, waiting...`,
			);
			await wait.for({ seconds: POLL_INTERVAL / 1000 });
		}

		if (!enhancementComplete) {
			console.warn(
				`  ⚠️  Enhancement ${enhancement.id} did not complete in time - skipping notifications`,
			);
			return {
				success: false,
				configurationId: config.id,
				configurationName: config.name,
				scrapeId: scrape.id,
				enhancementId: enhancement.id,
				notificationsSent: 0,
				error: "Enhancement did not complete in time",
			};
		}

		// Check if scrape has any listings
		const scrapeListingCount = await prisma.scrapeListing.count({
			where: { scrapeId: scrape.id },
		});

		if (scrapeListingCount === 0) {
			console.log(`  ℹ️  No listings found in scrape - skipping notifications`);
			return {
				success: true,
				configurationId: config.id,
				configurationName: config.name,
				scrapeId: scrape.id,
				enhancementId: enhancement.id,
				notificationsSent: 0,
				message: "No listings found",
			};
		}

		// Find and send top 2 listings
		console.log(`  🔎 Finding top unsent listings...`);
		const topListings = await getTopUnsentListings(
			config.id,
			enhancement.id,
			2,
		);

		let sentCount = 0;
		for (const listing of topListings) {
			console.log(
				`  📬 Sending notification ${sentCount + 1} for listing to user: ${userId}`,
			);
			await sendNotification(userId, config.id, listing);

			await prisma.sentNotification.create({
				data: {
					userId,
					configurationId: config.id,
					listingId: listing.listingId,
					compositeScore: listing.compositeScore,
					rank: listing.rank,
				},
			});

			sentCount++;
			console.log(`  ✅ Notification ${sentCount} sent and tracked`);
		}

		if (sentCount === 0) {
			console.log(`  ℹ️  No new listings to notify about`);
		} else {
			console.log(`  ✅ Sent ${sentCount} notification(s)`);
		}

		console.log("\n✅ Single search completed successfully");

		return {
			success: true,
			configurationId: config.id,
			configurationName: config.name,
			scrapeId: scrape.id,
			enhancementId: enhancement.id,
			notificationsSent: sentCount,
		};
	},
});
