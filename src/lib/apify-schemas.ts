import { z } from "zod";

// Environment schema for Apify token
export const ApifyEnvSchema = z.object({
  APIFY_TOKEN: z.string().min(1, "Apify token not configured"),
});

// Simplified search request schema
export const SearchRequestSchema = z.object({
  zipCodes: z.array(z.string()).min(1, "At least one zip code is required"),
  priceMax: z.number().min(1000).optional(),
  forRent: z.boolean().default(true),
});

// Get results query schema
export const GetResultsQuerySchema = z.object({
  runId: z.string().min(1, "Run ID is required"),
});

// Download results schema
export const DownloadResultsSchema = z.object({
  runId: z.string().min(1, "Run ID is required"),
  format: z.enum(["json", "csv"]).default("json"),
});

// Apify run status enum based on SDK
export const ApifyRunStatus = z.enum([
  "READY",
  "RUNNING",
  "SUCCEEDED",
  "FAILED",
  "TIMING-OUT",
  "TIMED-OUT",
  "ABORTING",
  "ABORTED",
]);

// Response schemas for better type safety
export const StartTaskResponseSchema = z.object({
  success: z.boolean(),
  runId: z.string(),
  status: ApifyRunStatus,
  message: z.string(),
});

export const GetResultsResponseSchema = z.object({
  success: z.boolean(),
  status: ApifyRunStatus,
  finished: z.boolean(),
  message: z.string().optional(),
  results: z.array(z.record(z.any(), z.any())).optional(),
  count: z.number().optional(),
});

export const ErrorResponseSchema = z.object({
  error: z.string(),
});

// Type exports
export type SearchRequest = z.infer<typeof SearchRequestSchema>;
export type GetResultsQuery = z.infer<typeof GetResultsQuerySchema>;
export type DownloadResultsRequest = z.infer<typeof DownloadResultsSchema>;
export type StartTaskResponse = z.infer<typeof StartTaskResponseSchema>;
export type GetResultsResponse = z.infer<typeof GetResultsResponseSchema>;
export type ErrorResponse = z.infer<typeof ErrorResponseSchema>;
export type ApifyRunStatusType = z.infer<typeof ApifyRunStatus>;
