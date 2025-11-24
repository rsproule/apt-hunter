"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Plus, ExternalLink, Loader2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Search {
  id: string;
  name: string | null;
  description: string | null;
  enabledForDailyCron: boolean;
  createdAt: string;
  updatedAt: string;
  scrape: {
    id: string;
    name: string | null;
    searchType: string;
    searchQuery: any;
    status: string;
    listingsCount: number;
    createdAt: string;
  };
  enhancement: {
    id: string;
    query: string;
    status: string;
  };
  _count: {
    userResponses: number;
  };
}

export default function SearchesPage() {
  const router = useRouter();
  const [searches, setSearches] = useState<Search[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    fetchSearches();
  }, []);

  const fetchSearches = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/searches");

      if (!response.ok) {
        throw new Error("Failed to fetch searches");
      }

      const data = await response.json();
      setSearches(data.searches);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const toggleCron = async (searchId: string, currentValue: boolean) => {
    try {
      setUpdatingId(searchId);
      const response = await fetch(`/api/searches/${searchId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          enabledForDailyCron: !currentValue,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update search");
      }

      // Update local state
      setSearches((prev) =>
        prev.map((s) =>
          s.id === searchId
            ? { ...s, enabledForDailyCron: !currentValue }
            : s
        )
      );
    } catch (err) {
      console.error("Error toggling cron:", err);
      alert(err instanceof Error ? err.message : "Failed to update");
    } finally {
      setUpdatingId(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500";
      case "running":
        return "bg-blue-500";
      case "failed":
        return "bg-red-500";
      case "pending":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const enabledCount = searches.filter((s) => s.enabledForDailyCron).length;

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-12 w-12 animate-spin text-gray-900 dark:text-white" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-red-600">{error}</p>
            <Button onClick={fetchSearches} className="mt-4">
              Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">My Searches</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your apartment searches and daily digest notifications
              </p>
            </div>
            <Button onClick={() => router.push("/")}>
              <Plus className="h-4 w-4 mr-2" />
              New Search
            </Button>
          </div>

          {/* Daily Digest Summary */}
          <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Daily Digest</CardTitle>
              <CardDescription>
                {enabledCount === 0 ? (
                  "No searches enabled for daily notifications"
                ) : enabledCount === 1 ? (
                  "1 search will send you daily notifications"
                ) : (
                  `${enabledCount} searches will send you daily notifications`
                )}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Searches table */}
        {searches.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <div className="h-16 w-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You don't have any searches yet.
              </p>
              <Button onClick={() => router.push("/")}>
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Search
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Search</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Query</TableHead>
                  <TableHead className="text-right">Listings</TableHead>
                  <TableHead className="text-right">Reviewed</TableHead>
                  <TableHead className="text-center">Daily Cron</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {searches.map((search) => {
                  const searchQuery = search.scrape.searchQuery;
                  const searchDisplay =
                    search.scrape.searchType === "zipcode"
                      ? searchQuery?.zipCodes?.join(", ")
                      : searchQuery?.searchUrls?.[0]?.url || "URL Search";

                  const displayName =
                    search.name ||
                    search.scrape.name ||
                    searchDisplay;

                  return (
                    <TableRow
                      key={search.id}
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => router.push(`/search/${search.id}`)}
                    >
                      <TableCell className="font-medium max-w-xs">
                        <div className="truncate" title={displayName}>
                          {displayName}
                        </div>
                        {search.description && (
                          <div
                            className="text-xs text-muted-foreground truncate"
                            title={search.description}
                          >
                            {search.description}
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${getStatusColor(search.scrape.status)} text-white`}
                        >
                          {search.scrape.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="max-w-md">
                        <div
                          className="text-sm truncate"
                          title={search.enhancement.query}
                        >
                          {search.enhancement.query}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        {search.scrape.listingsCount}
                      </TableCell>
                      <TableCell className="text-right">
                        {search._count.userResponses}
                      </TableCell>
                      <TableCell
                        className="text-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Switch
                            checked={search.enabledForDailyCron}
                            onCheckedChange={() =>
                              toggleCron(search.id, search.enabledForDailyCron)
                            }
                            disabled={updatingId === search.id}
                          />
                          {updatingId === search.id && (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation();
                            router.push(`/search/${search.id}`);
                          }}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Card>
        )}
      </div>
    </div>
  );
}

