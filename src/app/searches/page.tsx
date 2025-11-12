"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Heart, Trash2 } from "lucide-react";

interface SearchConfiguration {
  id: string;
  name: string | null;
  description: string | null;
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
  const [searches, setSearches] = useState<SearchConfiguration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSearches();
  }, []);

  const fetchSearches = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/configurations");

      if (!response.ok) {
        throw new Error("Failed to fetch searches");
      }

      const data = await response.json();
      setSearches(data.configurations);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
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
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Searches</h1>
            <p className="text-gray-600 dark:text-gray-400">
              View and manage your apartment searches
            </p>
          </div>
          <Button onClick={() => router.push("/")}>
            <Plus className="h-4 w-4 mr-2" />
            New Search
          </Button>
        </div>

        {/* Searches grid */}
        {searches.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searches.map((config) => {
              const searchQuery = config.scrape.searchQuery;
              const searchDisplay =
                config.scrape.searchType === "zipcode"
                  ? searchQuery?.zipCodes?.join(", ")
                  : searchQuery?.searchUrls?.[0]?.url || "URL Search";
              
              const displayName = config.name || config.scrape.name || searchDisplay;
              const responseCounts = config._count.userResponses;

              return (
                <Card
                  key={config.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => router.push(`/search/${config.id}`)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl line-clamp-2 flex-1">{displayName}</CardTitle>
                      <Badge className={`${getStatusColor(config.scrape.status)} text-white shrink-0`}>
                        {config.scrape.status}
                      </Badge>
                    </div>
                    {config.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                        {config.description}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Enhancement query */}
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        Looking for
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                        {config.enhancement.query}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Search className="h-4 w-4" />
                        <span>{config.scrape.listingsCount} listings</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{responseCounts} reviewed</span>
                      </div>
                    </div>

                    {/* Created date */}
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Created {new Date(config.createdAt).toLocaleDateString()}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/search/${config.id}`);
                        }}
                      >
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/search/${config.id}/review`);
                        }}
                      >
                        Review
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

