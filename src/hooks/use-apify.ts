import { useMutation } from "@tanstack/react-query";
import type { ApifyWorkflowRequest } from "@/lib/apify-actors";

interface TriggerTaskResponse {
	taskId: string;
	scrapeId: string;
	message: string;
}

// Generic hook to run any Apify actor through Trigger.dev
// This now returns immediately after triggering the task
export const useRunApifyActor = () => {
	return useMutation<TriggerTaskResponse, Error, ApifyWorkflowRequest>({
		mutationFn: async (request) => {
			// Trigger the task and return immediately
			const triggerResponse = await fetch("/api/apify", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(request),
			});

			if (!triggerResponse.ok) {
				const errorData = await triggerResponse.json();
				throw new Error(errorData.error || "Failed to trigger task");
			}

			const data: TriggerTaskResponse = await triggerResponse.json();
			return data;
		},
	});
};

// Convenience hook for Zillow zip code search
export const useZillowZipSearch = () => {
	const mutation = useRunApifyActor();

	return {
		...mutation,
		mutate: (
			params: {
				zipCodes: string[];
				priceMax?: number;
				forRent?: boolean;
			},
			options?: {
				onSuccess?: (data: TriggerTaskResponse) => void;
				onError?: (error: Error) => void;
			},
		) => {
			return mutation.mutate(
				{
					actorId: "maxcopell/zillow-zip-search",
					input: {
						zipCodes: params.zipCodes,
						priceMax: params.priceMax,
						forRent: params.forRent ?? true,
						forSaleByAgent: params.forRent ? false : true,
						forSaleByOwner: false,
						sold: false,
					},
				},
				options,
			);
		},
	};
};

// Convenience hook for Zillow URL search
export const useZillowUrlSearch = () => {
	const mutation = useRunApifyActor();

	return {
		...mutation,
		mutate: (
			searchUrl: string,
			options?: {
				onSuccess?: (data: TriggerTaskResponse) => void;
				onError?: (error: Error) => void;
			},
		) => {
			return mutation.mutate(
				{
					actorId: "maxcopell/zillow-scraper",
					input: {
						searchUrls: [{ url: searchUrl }],
					},
				},
				options,
			);
		},
	};
};

// Note: The hook now triggers the task and returns immediately.
// The task runs in the background and updates the database as it progresses.
// The UI can redirect to the search page immediately.
