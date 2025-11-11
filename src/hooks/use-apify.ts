import type { ApifyWorkflowRequest } from "@/lib/apify-actors";
import { useMutation } from "@tanstack/react-query";

interface ApifyWorkflowResponse {
  success: boolean;
  runId: string;
  status: string;
  results?: any[];
  count?: number;
  error?: string;
}

interface TriggerTaskResponse {
  taskId: string;
  message: string;
}

interface TaskStatusResponse {
  id: string;
  status: string;
  output: ApifyWorkflowResponse | null;
  isCompleted: boolean;
  isSuccess: boolean;
  isFailed: boolean;
  startedAt: string | null;
  completedAt: string | null;
}

// Generic hook to run any Apify actor through Trigger.dev
export const useRunApifyActor = () => {
  return useMutation<ApifyWorkflowResponse, Error, ApifyWorkflowRequest>({
    mutationFn: async (request) => {
      // Step 1: Trigger the task
      const triggerResponse = await fetch("/api/apify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });

      if (!triggerResponse.ok) {
        const errorData = await triggerResponse.json();
        throw new Error(errorData.error || "Failed to trigger task");
      }

      const { taskId }: TriggerTaskResponse = await triggerResponse.json();

      // Step 2: Poll for completion
      const pollInterval = 3000; // 3 seconds
      const maxWaitTime = 10 * 60 * 1000; // 10 minutes
      const startTime = Date.now();

      while (Date.now() - startTime < maxWaitTime) {
        const statusResponse = await fetch(`/api/apify/status/${taskId}`);

        if (!statusResponse.ok) {
          throw new Error("Failed to check task status");
        }

        const status: TaskStatusResponse = await statusResponse.json();

        if (status.isCompleted) {
          if (status.isSuccess && status.output) {
            return status.output;
          } else {
            throw new Error(
              status.output?.error || "Task failed without error message",
            );
          }
        }

        // Wait before polling again
        await new Promise((resolve) => setTimeout(resolve, pollInterval));
      }

      throw new Error("Task timed out");
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
        onSuccess?: (data: ApifyWorkflowResponse) => void;
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
        onSuccess?: (data: ApifyWorkflowResponse) => void;
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

// Note: With Trigger.dev, the hook handles polling internally.
// The mutation will wait for the task to complete and return results.
// The UI will show a loading state while the task is running.
