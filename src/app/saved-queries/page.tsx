"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Play, Heart, Trash2 } from "lucide-react";

interface SavedQuery {
  id: string;
  name: string;
  description: string | null;
  searchType: string;
  searchQuery: any;
  enhancementQuery: string;
  createdAt: string;
  updatedAt: string;
  lastRunAt: string | null;
  _count: {
    responses: number;
  };
}

export default function SavedQueriesPage() {
  const router = useRouter();
  const [queries, setQueries] = useState<SavedQuery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSavedQueries();
  }, []);

  const fetchSavedQueries = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/saved-queries", {
        headers: {
          "x-echo-user-id": "user_123", // Replace with actual user ID from auth
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch saved queries");
      }

      const data = await response.json();
      setQueries(data.savedQueries);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleRunQuery = async (queryId: string) => {
    try {
      const response = await fetch(`/api/saved-queries/${queryId}/run`, {
        method: "POST",
        headers: {
          "x-echo-user-id": "user_123", // Replace with actual user ID from auth
        },
      });

      if (!response.ok) {
        throw new Error("Failed to run query");
      }

      const data = await response.json();
      // Redirect to the scrape results page
      router.push(`/search/${data.scrape.id}`);
    } catch (err) {
      console.error("Error running query:", err);
      alert("Failed to run query. Please try again.");
    }
  };

  const handleDeleteQuery = async (queryId: string) => {
    if (!confirm("Are you sure you want to delete this saved query?")) {
      return;
    }

    try {
      const response = await fetch(`/api/saved-queries/${queryId}`, {
        method: "DELETE",
        headers: {
          "x-echo-user-id": "user_123", // Replace with actual user ID from auth
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete query");
      }

      // Refresh the list
      fetchSavedQueries();
    } catch (err) {
      console.error("Error deleting query:", err);
      alert("Failed to delete query. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
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
            <Button onClick={fetchSavedQueries} className="mt-4">
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
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Saved Queries</h1>
            <p className="text-gray-600">
              Manage your saved searches and enhancement preferences
            </p>
          </div>
          <Button onClick={() => router.push("/saved-queries/new")}>
            <Plus className="h-4 w-4 mr-2" />
            New Query
          </Button>
        </div>

        {/* Queries grid */}
        {queries.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-gray-600 mb-4">
                You don't have any saved queries yet.
              </p>
              <Button onClick={() => router.push("/saved-queries/new")}>
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Query
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {queries.map((query) => {
              const searchQuery = query.searchQuery;
              const searchDisplay =
                query.searchType === "zipcode"
                  ? searchQuery?.zipCodes?.join(", ")
                  : "URL Search";

              return (
                <Card
                  key={query.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{query.name}</CardTitle>
                    {query.description && (
                      <p className="text-sm text-gray-600 mt-1">
                        {query.description}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Search info */}
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        Search
                      </p>
                      <Badge variant="outline">{searchDisplay}</Badge>
                    </div>

                    {/* Enhancement query */}
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        Enhancement Query
                      </p>
                      <p className="text-sm text-gray-700 line-clamp-2">
                        {query.enhancementQuery}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{query._count.responses} responses</span>
                      </div>
                    </div>

                    {/* Last run */}
                    {query.lastRunAt && (
                      <p className="text-xs text-gray-500">
                        Last run:{" "}
                        {new Date(query.lastRunAt).toLocaleDateString()}
                      </p>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => handleRunQuery(query.id)}
                      >
                        <Play className="h-4 w-4 mr-1" />
                        Run
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          router.push(`/saved-queries/${query.id}/review`)
                        }
                      >
                        Review
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          router.push(`/saved-queries/${query.id}/liked`)
                        }
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDeleteQuery(query.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}


