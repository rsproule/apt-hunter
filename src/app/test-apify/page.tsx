"use client";

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
import { useZillowZipSearch } from "@/hooks/use-apify";
import { useState } from "react";

export default function TestApifyPage() {
  // Search form state
  const [zipCodes, setZipCodes] = useState("10014,07306");
  const [priceMax, setPriceMax] = useState<number | undefined>(400000);
  const [forRent, setForRent] = useState(true);

  // Results state
  const [searchResults, setSearchResults] = useState<any>(null);

  // TanStack Query hook - now returns results inline via workflow!
  const { mutate: searchZillow, isPending, error } = useZillowZipSearch();

  const startApifyTask = () => {
    const zipCodeArray = zipCodes
      .split(",")
      .map((zip) => zip.trim())
      .filter(Boolean);

    searchZillow(
      {
        zipCodes: zipCodeArray,
        priceMax: priceMax || undefined,
        forRent,
      },
      {
        onSuccess: (data) => {
          console.log("Search completed:", data);
          setSearchResults(data);
        },
      },
    );
  };

  const downloadResults = (format: "json" | "csv" = "json") => {
    if (!searchResults?.results) return;

    const dataStr =
      format === "json"
        ? JSON.stringify(searchResults.results, null, 2)
        : convertToCSV(searchResults.results);

    const blob = new Blob([dataStr], {
      type: format === "json" ? "application/json" : "text/csv",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `zillow-results-${searchResults.runId}.${format}`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const convertToCSV = (data: any[]): string => {
    if (!data.length) return "";
    const headers = Object.keys(data[0]);
    const rows = data.map((row) =>
      headers.map((header) => JSON.stringify(row[header] ?? "")).join(","),
    );
    return [headers.join(","), ...rows].join("\n");
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
            Test the Apify integration with Vercel Workflow - results return
            inline!
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Search Properties</CardTitle>
            <CardDescription>
              Enter your search criteria to scrape Zillow listings. The workflow
              will wait for results.
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
              disabled={isPending}
              className="w-full sm:w-auto"
            >
              {isPending
                ? "Running workflow and waiting for results..."
                : "Start Zillow Scraping"}
            </Button>

            {error && (
              <div className="text-red-600 text-sm">Error: {error.message}</div>
            )}

            {searchResults && (
              <div className="space-y-2">
                <p>
                  <strong>Run ID:</strong> {searchResults.runId}
                </p>
                <div className="flex items-center gap-2">
                  <strong>Status:</strong>
                  <Badge className={getStatusColor(searchResults.status)}>
                    {searchResults.status}
                  </Badge>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {searchResults?.results && searchResults.results.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>
                Workflow completed - results ready!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    Found {searchResults.count} results
                  </p>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => downloadResults("json")}
                      size="sm"
                      variant="outline"
                    >
                      Download JSON
                    </Button>
                    <Button
                      onClick={() => downloadResults("csv")}
                      size="sm"
                      variant="outline"
                    >
                      Download CSV
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4 bg-gray-50 max-h-96 overflow-y-auto">
                  <pre className="text-sm whitespace-pre-wrap">
                    {JSON.stringify(searchResults.results.slice(0, 3), null, 2)}
                  </pre>
                  {searchResults.results.length > 3 && (
                    <p className="text-sm text-gray-500 mt-2">
                      ... and {searchResults.results.length - 3} more results
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
