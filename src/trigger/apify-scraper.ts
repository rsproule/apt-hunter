import type { ApifyActorId } from "@/lib/apify-actors";
import { ApifyWorkflowRequestSchema } from "@/lib/apify-actors";
import { ApifyEnvSchema } from "@/lib/apify-schemas";
import { task, wait } from "@trigger.dev/sdk/v3";
import { ApifyClient } from "apify-client";

const MAX_WAIT_TIME = 10 * 60 * 1000; // 10 minutes
const POLL_INTERVAL = 6000; // 5 seconds

interface ApifyTaskPayload {
  actorId: ApifyActorId;
  input: any;
}

interface ApifyTaskResult {
  success: boolean;
  runId: string;
  status: string;
  results?: any[];
  count?: number;
  error?: string;
}

export const runApifyTask = task({
  id: "apify-scraper",
  run: async (payload: ApifyTaskPayload): Promise<ApifyTaskResult> => {
    // Validate the payload
    const validatedRequest = ApifyWorkflowRequestSchema.parse(payload);
    const { actorId, input } = validatedRequest;

    // Get API token from environment
    const env = ApifyEnvSchema.parse(process.env);
    const apiToken = env.APIFY_TOKEN;

    // Initialize Apify client
    const client = new ApifyClient({ token: apiToken });

    // Step 1: Start the actor
    console.log(`Starting Apify actor ${actorId}...`);
    const run = await client.actor(actorId).start(input);
    const runId = run.id;
    console.log(`Started Apify actor ${actorId} with run ID: ${runId}`);

    // Step 2: Poll for completion
    const startTime = Date.now();

    while (Date.now() - startTime < MAX_WAIT_TIME) {
      // Check run status
      const runStatus = await client.run(runId).get();
      console.log(`Checking status for run ${runId}: ${runStatus?.status}`);

      if (runStatus?.status === "SUCCEEDED") {
        // Fetch results
        const dataset = await client
          .dataset(runStatus.defaultDatasetId)
          .listItems();

        return {
          success: true,
          runId,
          status: runStatus.status,
          results: dataset.items,
          count: dataset.items.length,
        };
      }

      if (
        runStatus?.status === "FAILED" ||
        runStatus?.status === "ABORTED" ||
        runStatus?.status === "TIMED-OUT"
      ) {
        return {
          success: false,
          runId,
          status: runStatus.status,
          error: `Actor run ${runStatus.status.toLowerCase()}`,
        };
      }

      // Still running, wait before checking again
      await wait.for({ seconds: POLL_INTERVAL / 1000 });
    }

    // Timeout
    return {
      success: false,
      runId,
      status: "TIMEOUT",
      error: "Task timed out waiting for actor completion",
    };
  },
});
