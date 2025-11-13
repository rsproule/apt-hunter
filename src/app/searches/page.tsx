"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, ExternalLink } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
            <h1 className="text-3xl font-bold mb-2">Search Runs</h1>
            <p className="text-gray-600 dark:text-gray-400">
              {searches.length} {searches.length === 1 ? "run" : "runs"}
            </p>
          </div>
          <Button onClick={() => router.push("/")}>
            <Plus className="h-4 w-4 mr-2" />
            New Search
          </Button>
        </div>

        {/* Searches table */}
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
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Query</TableHead>
                  <TableHead className="text-right">Listings</TableHead>
                  <TableHead className="text-right">Reviewed</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {searches.map((config) => {
                  const searchQuery = config.scrape.searchQuery;
                  const searchDisplay =
                    config.scrape.searchType === "zipcode"
                      ? searchQuery?.zipCodes?.join(", ")
                      : searchQuery?.searchUrls?.[0]?.url || "URL Search";
                  
                  const displayName = config.name || config.scrape.name || searchDisplay;
                  const responseCounts = config._count.userResponses;

                  return (
                    <TableRow
                      key={config.id}
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => router.push(`/search/${config.id}`)}
                    >
                      <TableCell className="font-medium max-w-xs">
                        <div className="truncate" title={displayName}>
                          {displayName}
                        </div>
                        {config.description && (
                          <div className="text-xs text-muted-foreground truncate" title={config.description}>
                            {config.description}
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge className={`${getStatusColor(config.scrape.status)} text-white`}>
                          {config.scrape.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="max-w-md">
                        <div className="text-sm truncate" title={config.enhancement.query}>
                          {config.enhancement.query}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        {config.scrape.listingsCount}
                      </TableCell>
                      <TableCell className="text-right">
                        {responseCounts}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(config.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(`/search/${config.id}`);
                            }}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
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

