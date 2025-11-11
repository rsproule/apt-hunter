"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  useDownloadResults,
  usePropertySearchResults,
  useStartPropertySearch,
} from "@/hooks/use-apify";

export default function TestApifyPage() {
  const [runId, setRunId] = useState<string>("");

  // Search form state
  const [zipCodes, setZipCodes] = useState("10014,07306");
  const [priceMax, setPriceMax] = useState<number | undefined>(400000);
  const [forRent, setForRent] = useState(true);

  // TanStack Query hooks
  const startSearchMutation = useStartPropertySearch();
  const {
    data: resultsData,
    error: resultsError,
    isLoading: resultsLoading,
  } = usePropertySearchResults(runId);
  const downloadMutation = useDownloadResults();

  const startApifyTask = () => {
    const zipCodeArray = zipCodes
      .split(",")
      .map((zip) => zip.trim())
      .filter(Boolean);

    startSearchMutation.mutate(
      {
        zipCodes: zipCodeArray,
        priceMax: priceMax || undefined,
        forRent,
      },
      {
        onSuccess: (data) => {
          setRunId(data.runId);
        },
      },
    );
  };

  // Results are automatically polled by usePropertySearchResults hook

  const downloadResults = (format: "json" | "csv" = "json") => {
    if (!runId) return;

    downloadMutation.mutate(
      { runId, format },
      {
        onSuccess: (blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `zillow-results-${runId}.${format}`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        },
      },
    );
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "succeeded":
        return "bg-green-500";
      case "running":
        return "bg-blue-500";
      case "failed":
        return "bg-red-500";
      case "ready":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Apify Zillow Scraper Test</h1>
          <p className="text-gray-600">
            Test the Apify integration for scraping Zillow listings
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Search Properties</CardTitle>
            <CardDescription>
              Enter your search criteria to scrape Zillow listings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="zipCodes">Zip Codes (comma-separated)</Label>
                <Input
                  id="zipCodes"
                  value={zipCodes}
                  onChange={(e) => setZipCodes(e.target.value)}
                  placeholder="e.g., 10014, 07306, 90210"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="priceMax">Max Price ($)</Label>
                <Input
                  id="priceMax"
                  type="number"
                  min="1000"
                  value={priceMax || ""}
                  onChange={(e) =>
                    setPriceMax(
                      e.target.value ? Number(e.target.value) : undefined,
                    )
                  }
                  placeholder="e.g., 400000"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="forRent"
                checked={forRent}
                onCheckedChange={setForRent}
              />
              <Label htmlFor="forRent">
                {forRent ? "For Rent" : "For Sale"}
              </Label>
            </div>

            <Button
              onClick={startApifyTask}
              disabled={startSearchMutation.isPending}
              className="w-full sm:w-auto"
            >
              {startSearchMutation.isPending
                ? "Starting..."
                : "Start Zillow Scraping"}
            </Button>

            {startSearchMutation.error && (
              <div className="text-red-600 text-sm">
                Error: {startSearchMutation.error.message}
              </div>
            )}

            {runId && (
              <div className="space-y-2">
                <p>
                  <strong>Run ID:</strong> {runId}
                </p>
                {resultsData?.status && (
                  <div className="flex items-center gap-2">
                    <strong>Status:</strong>
                    <Badge className={getStatusColor(resultsData.status)}>
                      {resultsData.status}
                    </Badge>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {runId && (
          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>
                Results are automatically updated as they become available
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {resultsLoading && (
                <div className="text-blue-600 text-sm">
                  Checking for results...
                </div>
              )}

              {resultsError && (
                <div className="text-red-600 text-sm">
                  Error: {resultsError.message}
                </div>
              )}

              {resultsData?.results && resultsData.results.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                      Found {resultsData.results.length} results
                    </p>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => downloadResults("json")}
                        size="sm"
                        variant="outline"
                        disabled={downloadMutation.isPending}
                      >
                        {downloadMutation.isPending
                          ? "Downloading..."
                          : "Download JSON"}
                      </Button>
                      <Button
                        onClick={() => downloadResults("csv")}
                        size="sm"
                        variant="outline"
                        disabled={downloadMutation.isPending}
                      >
                        {downloadMutation.isPending
                          ? "Downloading..."
                          : "Download CSV"}
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 bg-gray-50 max-h-96 overflow-y-auto">
                    <pre className="text-sm whitespace-pre-wrap">
                      {JSON.stringify(resultsData.results.slice(0, 3), null, 2)}
                    </pre>
                    {resultsData.results.length > 3 && (
                      <p className="text-sm text-gray-500 mt-2">
                        ... and {resultsData.results.length - 3} more results
                      </p>
                    )}
                  </div>
                </div>
              )}

              {downloadMutation.error && (
                <div className="text-red-600 text-sm">
                  Download error: {downloadMutation.error.message}
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
