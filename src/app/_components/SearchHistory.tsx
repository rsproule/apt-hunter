"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Scrape {
  id: string;
  createdAt: string;
  name: string | null;
  searchType: string;
  searchQuery: any;
  status: string;
  listingsCount: number;
}

export default function SearchHistory() {
  const [scrapes, setScrapes] = useState<Scrape[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    fetchScrapes();
  }, [pathname]); // Refetch when pathname changes

  const fetchScrapes = async () => {
    try {
      const response = await fetch("/api/scrapes");
      if (!response.ok) throw new Error("Failed to fetch scrapes");
      const data = await response.json();
      setScrapes(data.scrapes);
    } catch (error) {
      console.error("Error fetching scrapes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getSearchDisplayText = (scrape: Scrape) => {
    if (scrape.name) return scrape.name;

    if (scrape.searchType === "zipcode" && scrape.searchQuery) {
      const query = scrape.searchQuery as any;
      const zipCodes = query.zipCodes?.join(", ") || "Unknown";
      return `${zipCodes}`;
    }

    if (scrape.searchType === "url" && scrape.searchQuery) {
      const query = scrape.searchQuery as any;
      return query.url ? "URL Search" : "Search";
    }

    return "Search";
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

  if (isLoading) {
    return (
      <div className="space-y-2">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-20 w-full" />
        ))}
      </div>
    );
  }

  if (scrapes.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 text-sm">
        <p>No searches yet</p>
        <p className="mt-2">Start a new search to see it here</p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-full">
      <div className="space-y-2">
        {scrapes.map((scrape) => {
          const isActive = pathname === `/search/${scrape.id}`;
          return (
            <Link key={scrape.id} href={`/search/${scrape.id}`}>
              <div
                className={`p-3 rounded-lg border cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ${
                  isActive
                    ? "bg-gray-100 dark:bg-gray-800 border-gray-300"
                    : "bg-white dark:bg-gray-900"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">
                      {getSearchDisplayText(scrape)}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {formatDistanceToNow(new Date(scrape.createdAt), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                  <Badge
                    className={`${getStatusColor(scrape.status)} text-white ml-2`}
                    variant="secondary"
                  >
                    {scrape.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>{scrape.listingsCount} listings</span>
                  <span>•</span>
                  <span className="capitalize">{scrape.searchType}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </ScrollArea>
  );
}

