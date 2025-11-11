"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader } from "@/components/ai-elements/loader";
import { Sparkles, Send, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Enhancement {
  id: string;
  query: string;
  status: string;
  error?: string | null;
  processedCount: number;
  totalCount: number;
  createdAt: string;
  columns?: Array<{
    name: string;
    type: string;
    description: string;
  }>;
}

interface EnhancementChatProps {
  scrapeId: string;
  activeEnhancementIds: string[];
  enhancements: Enhancement[];
  onEnhancementCreated?: () => void;
}

export default function EnhancementChat({
  scrapeId,
  activeEnhancementIds,
  enhancements,
  onEnhancementCreated,
}: EnhancementChatProps) {
  const [query, setQuery] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : "",
  );

  const toggleEnhancement = (enhancementId: string) => {
    const newActiveIds = activeEnhancementIds.includes(enhancementId)
      ? activeEnhancementIds.filter((id) => id !== enhancementId)
      : [...activeEnhancementIds, enhancementId];

    const params = new URLSearchParams(searchParams);
    if (newActiveIds.length > 0) {
      params.set("enhancements", newActiveIds.join(","));
    } else {
      params.delete("enhancements");
    }
    params.set("page", "1"); // Reset to first page

    router.push(`?${params.toString()}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/enhancements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          scrapeId,
          query: query.trim(),
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to create enhancement");
      }

      const data = await response.json();

      // Clear the input
      setQuery("");

      // Add new enhancement to active list
      const newActiveIds = [...activeEnhancementIds, data.enhancementId];
      const params = new URLSearchParams(searchParams);
      params.set("enhancements", newActiveIds.join(","));
      params.set("page", "1");

      router.push(`?${params.toString()}`);

      // Notify parent
      onEnhancementCreated?.();
    } catch (err) {
      console.error("Error creating enhancement:", err);
      setError(
        err instanceof Error ? err.message : "Failed to create enhancement",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const badges: Record<string, { color: string; text: string }> = {
      pending: { color: "bg-yellow-100 text-yellow-800", text: "Pending" },
      processing: {
        color: "bg-blue-100 text-blue-800",
        text: "Processing",
      },
      completed: {
        color: "bg-green-100 text-green-800",
        text: "Completed",
      },
      failed: { color: "bg-red-100 text-red-800", text: "Failed" },
    };

    const badge = badges[status] || badges.pending;
    return (
      <span
        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}
      >
        {badge.text}
      </span>
    );
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Chat with Results</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Ask about visual features to filter and rank listings
            </p>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="e.g., Show me places with hardwood floors and modern appliances"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={isSubmitting}
              className="flex-1"
            />
            <Button type="submit" disabled={!query.trim() || isSubmitting}>
              {isSubmitting ? (
                <Loader />
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Analyze
                </>
              )}
            </Button>
          </div>

          {error && (
            <div className="flex items-start gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-red-800 dark:text-red-200">
                {error}
              </div>
            </div>
          )}

          <p className="text-xs text-gray-500">
            💡 Tip: Ask about things you can see in photos (floors,
            appliances, layout, outdoor space, etc.)
          </p>
        </form>

        {/* Previous Enhancements */}
        {enhancements.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Available Enhancements
            </h4>
            <div className="space-y-2">
              {enhancements.map((enhancement) => {
                const isActive = activeEnhancementIds.includes(enhancement.id);
                return (
                  <button
                    key={enhancement.id}
                    onClick={() => toggleEnhancement(enhancement.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors border-2 ${
                      isActive
                        ? "bg-purple-50 dark:bg-purple-900/20 border-purple-500 dark:border-purple-500"
                        : "bg-gray-50 dark:bg-gray-800 border-transparent hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isActive}
                          onChange={() => {}}
                          className="rounded"
                        />
                        <p className="text-sm font-medium line-clamp-2">
                          {enhancement.query}
                        </p>
                      </div>
                      {getStatusBadge(enhancement.status)}
                      </div>

                    {enhancement.status === "processing" && (
                    <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                        <div
                          className="bg-blue-600 h-1.5 rounded-full transition-all"
                          style={{
                            width: `${
                              (enhancement.processedCount /
                                enhancement.totalCount) *
                              100
                            }%`,
                          }}
                        />
                      </div>
                      <span>
                        {enhancement.processedCount}/{enhancement.totalCount}
                      </span>
                      </div>
                    )}

                    {enhancement.status === "failed" && enhancement.error && (
                    <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                      {enhancement.error}
                      </p>
                    )}

                    {enhancement.status === "completed" &&
                    enhancement.columns && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {enhancement.columns.map((col) => (
                          <span
                            key={col.name}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                          >
                            {col.description}
                          </span>
                        ))}
                        </div>
                      )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

