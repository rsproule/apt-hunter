import { z } from "zod";

// Define input schemas for different Apify actors
export const ApifyActorInputSchemas = {
	"maxcopell/zillow-zip-search": z.object({
		zipCodes: z.array(z.string()).min(1, "At least one zip code is required"),
		priceMax: z.number().min(1000).optional(),
		forRent: z.boolean().default(true),
		forSaleByAgent: z.boolean().optional(),
		forSaleByOwner: z.boolean().optional(),
		sold: z.boolean().optional(),
	}),
	"maxcopell/zillow-scraper": z.object({
		searchUrls: z
			.array(
				z.object({
					url: z.string().url("Valid Zillow search URL is required"),
				}),
			)
			.min(1, "At least one search URL is required"),
	}),
} as const;

// Extract actor IDs as a type
export type ApifyActorId = keyof typeof ApifyActorInputSchemas;

// Helper type to get input type for a specific actor
export type ApifyActorInput<T extends ApifyActorId> = z.infer<
	(typeof ApifyActorInputSchemas)[T]
>;

// Union type of all possible inputs
export type AnyApifyActorInput = {
	[K in ApifyActorId]: {
		actorId: K;
		input: ApifyActorInput<K>;
	};
}[ApifyActorId];

// Request schema that validates actor ID and its corresponding input
export const ApifyWorkflowRequestSchema = z.discriminatedUnion("actorId", [
	z.object({
		actorId: z.literal("maxcopell/zillow-zip-search"),
		input: ApifyActorInputSchemas["maxcopell/zillow-zip-search"],
	}),
	z.object({
		actorId: z.literal("maxcopell/zillow-scraper"),
		input: ApifyActorInputSchemas["maxcopell/zillow-scraper"],
	}),
]);

export type ApifyWorkflowRequest = z.infer<typeof ApifyWorkflowRequestSchema>;
