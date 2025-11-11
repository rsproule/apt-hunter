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
import { useZillowUrlSearch, useZillowZipSearch } from "@/hooks/use-apify";
import { useState } from "react";

type SearchMode = "zipcode" | "url";

export default function TestApifyPage() {
  // Search mode
  const [searchMode, setSearchMode] = useState<SearchMode>("url");

  // ZIP Code search state
  const [zipCodes, setZipCodes] = useState("10003"); // East Village
  const [priceMax, setPriceMax] = useState<number | undefined>(400000);
  const [forRent, setForRent] = useState(true);

  // URL search state
  const [searchUrl, setSearchUrl] = useState("");

  // Results state
  const [searchResults, setSearchResults] = useState<any>(null);

  // TanStack Query hooks - now returns results inline via Trigger.dev!
  const {
    mutate: searchZillowByZip,
    isPending: isZipSearchPending,
    error: zipSearchError,
  } = useZillowZipSearch();
  const {
    mutate: searchZillowByUrl,
    isPending: isUrlSearchPending,
    error: urlSearchError,
  } = useZillowUrlSearch();

  const isPending = isZipSearchPending || isUrlSearchPending;
  const error = zipSearchError || urlSearchError;

  const startApifyTask = () => {
    // Clear previous results
    setSearchResults(null);

    if (searchMode === "zipcode") {
      const zipCodeArray = zipCodes
        .split(",")
        .map((zip) => zip.trim())
        .filter(Boolean);

      searchZillowByZip(
        {
          zipCodes: zipCodeArray,
          priceMax: priceMax || undefined,
          forRent,
        },
        {
          onSuccess: (data) => {
            console.log("ZIP search completed:", data);
            setSearchResults(data);
          },
        },
      );
    } else {
      searchZillowByUrl(searchUrl.trim(), {
        onSuccess: (data) => {
          console.log("URL search completed:", data);
          setSearchResults(data);
        },
      });
    }
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
            Test the Apify integration with Trigger.dev - results return inline!
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Search Properties</CardTitle>
            <CardDescription>
              Choose your search method and enter criteria to scrape Zillow
              listings. The task will wait for results.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search Mode Selector */}
            <div className="space-y-2">
              <Label>Search Mode</Label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={searchMode === "zipcode" ? "default" : "outline"}
                  onClick={() => setSearchMode("zipcode")}
                  disabled={isPending}
                >
                  ZIP Code Search
                </Button>
                <Button
                  type="button"
                  variant={searchMode === "url" ? "default" : "outline"}
                  onClick={() => setSearchMode("url")}
                  disabled={isPending}
                >
                  URL Search
                </Button>
              </div>
            </div>

            {/* ZIP Code Search Fields */}
            {searchMode === "zipcode" && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="zipCodes">
                      Zip Codes (comma-separated)
                    </Label>
                    <Input
                      id="zipCodes"
                      value={zipCodes}
                      onChange={(e) => setZipCodes(e.target.value)}
                      placeholder="e.g., 10014, 07306, 90210"
                      disabled={isPending}
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
                      disabled={isPending}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="forRent"
                    checked={forRent}
                    onCheckedChange={setForRent}
                    disabled={isPending}
                  />
                  <Label htmlFor="forRent">
                    {forRent ? "For Rent" : "For Sale"}
                  </Label>
                </div>
              </>
            )}

            {/* URL Search Fields */}
            {searchMode === "url" && (
              <div className="space-y-2">
                <Label htmlFor="searchUrl">Zillow Search URL</Label>
                <Input
                  id="searchUrl"
                  value={searchUrl}
                  onChange={(e) => setSearchUrl(e.target.value)}
                  placeholder="https://www.zillow.com/..."
                  disabled={isPending}
                  className="font-mono text-xs"
                />
                <p className="text-xs text-gray-500">
                  Paste a complete Zillow search URL with filters applied. You
                  can get this by searching on Zillow and copying the URL from
                  your browser.
                </p>
              </div>
            )}

            <Button
              onClick={startApifyTask}
              disabled={isPending}
              className="w-full sm:w-auto"
            >
              {isPending
                ? "Running task and waiting for results..."
                : `Start ${
                    searchMode === "zipcode" ? "ZIP Code" : "URL"
                  } Search`}
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
              <CardDescription>Task completed - results ready!</CardDescription>
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
