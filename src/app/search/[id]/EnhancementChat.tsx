"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader } from "@/components/ai-elements/loader";
import { Sparkles, Send, AlertCircle, Trash2, RefreshCw, XCircle, Check } from "lucide-react";
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
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [retryingId, setRetryingId] = useState<string | null>(null);
  const [cancelingId, setCancelingId] = useState<string | null>(null);
  const [approvingId, setApprovingId] = useState<string | null>(null);
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

  const handleDelete = async (enhancementId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("Are you sure you want to delete this enhancement?")) return;

    setDeletingId(enhancementId);
    try {
      const response = await fetch(
        `/api/enhancements/${enhancementId}/delete`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to delete enhancement");
      }

      // Remove from active list if it was active
      const newActiveIds = activeEnhancementIds.filter(
        (id) => id !== enhancementId,
      );
      const params = new URLSearchParams(searchParams);
      if (newActiveIds.length > 0) {
        params.set("enhancements", newActiveIds.join(","));
      } else {
        params.delete("enhancements");
      }

      router.push(`?${params.toString()}`);
      router.refresh();
    } catch (err) {
      console.error("Error deleting enhancement:", err);
      alert("Failed to delete enhancement");
    } finally {
      setDeletingId(null);
    }
  };

  const handleRetry = async (enhancementId: string, e: React.MouseEvent) => {
    e.stopPropagation();

    setRetryingId(enhancementId);
    try {
      const response = await fetch(
        `/api/enhancements/${enhancementId}/retry`,
        {
          method: "POST",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to retry enhancement");
      }

      router.refresh();
    } catch (err) {
      console.error("Error retrying enhancement:", err);
      alert("Failed to retry enhancement");
    } finally {
      setRetryingId(null);
    }
  };

  const handleCancel = async (enhancementId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("Are you sure you want to cancel this enhancement?")) return;

    setCancelingId(enhancementId);
    try {
      const response = await fetch(
        `/api/enhancements/${enhancementId}/cancel`,
        {
          method: "POST",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to cancel enhancement");
      }

      // Remove from active list if it was active
      const newActiveIds = activeEnhancementIds.filter(
        (id) => id !== enhancementId,
      );
      const params = new URLSearchParams(searchParams);
      if (newActiveIds.length > 0) {
        params.set("enhancements", newActiveIds.join(","));
      } else {
        params.delete("enhancements");
      }

      router.push(`?${params.toString()}`);
      router.refresh();
    } catch (err) {
      console.error("Error canceling enhancement:", err);
      alert("Failed to cancel enhancement");
    } finally {
      setCancelingId(null);
    }
  };

  const handleApprove = async (enhancementId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    console.log("Approving enhancement:", enhancementId);
    setApprovingId(enhancementId);
    
    try {
      console.log("Sending approval request...");
      const response = await fetch(
        `/api/enhancements/${enhancementId}/approve`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        },
      );

      console.log("Approval response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Approval failed:", errorData);
        throw new Error(errorData.error || "Failed to approve enhancement");
      }

      const data = await response.json();
      console.log("Approval successful:", data);

      // Add to active enhancements immediately and refresh
      const newActiveIds = [...activeEnhancementIds, enhancementId];
      const params = new URLSearchParams(searchParams);
      params.set("enhancements", newActiveIds.join(","));
      params.set("page", "1");

      console.log("Redirecting to:", `?${params.toString()}`);

      // Force a full refresh with the new URL
      window.location.href = `?${params.toString()}`;
    } catch (err) {
      console.error("Error approving enhancement:", err);
      alert(`Failed to approve enhancement: ${err instanceof Error ? err.message : "Unknown error"}`);
      setApprovingId(null); // Reset state on error
    }
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

      // Just refresh - don't auto-activate until approved
      // The EnhancementPolling component will handle showing the approval state
      router.refresh();

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
      pending_approval: {
        color: "bg-purple-100 text-purple-800",
        text: "Review",
      },
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
                const canToggle = enhancement.status === "completed";
                
                return (
                  <div
                    key={enhancement.id}
                    onClick={
                      canToggle
                        ? () => toggleEnhancement(enhancement.id)
                        : undefined
                    }
                    className={`w-full text-left p-3 rounded-lg transition-colors border-2 ${
                      isActive
                        ? "bg-purple-50 dark:bg-purple-900/20 border-purple-500 dark:border-purple-500"
                        : "bg-gray-50 dark:bg-gray-800 border-transparent hover:bg-gray-100 dark:hover:bg-gray-700"
                    } ${canToggle ? "cursor-pointer" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        {canToggle && (
                          <input
                            type="checkbox"
                            checked={isActive}
                            onChange={() => {}}
                            className="rounded"
                          />
                        )}
                        <p className="text-sm font-medium line-clamp-2">
                          {enhancement.query}
                        </p>
                      </div>
                      {getStatusBadge(enhancement.status)}
                      </div>

                    {(enhancement.status === "processing" ||
                      enhancement.status === "pending") && (
                      <>
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
                        <div className="flex gap-2 mt-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => handleCancel(enhancement.id, e)}
                            disabled={cancelingId === enhancement.id}
                            className="text-xs h-7"
                          >
                            {cancelingId === enhancement.id ? (
                              <Loader />
                            ) : (
                              <>
                                <XCircle className="w-3 h-3 mr-1" />
                                Cancel
                              </>
                            )}
                          </Button>
                        </div>
                      </>
                    )}

                    {enhancement.status === "pending_approval" &&
                      enhancement.columns && (
                        <>
                          <div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded-lg mt-2">
                            <p className="text-xs font-medium text-purple-900 dark:text-purple-100 mb-2">
                              Review generated columns:
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {enhancement.columns.map((col) => (
                                <span
                                  key={col.name}
                                  className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-purple-200 dark:bg-purple-800 text-purple-900 dark:text-purple-100"
                                >
                                  {col.description}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2 mt-2">
                            <Button
                              size="sm"
                              variant="default"
                              onClick={(e) => handleApprove(enhancement.id, e)}
                              disabled={approvingId === enhancement.id}
                              className="text-xs h-7 flex-1 bg-purple-600 hover:bg-purple-700"
                            >
                              {approvingId === enhancement.id ? (
                                <Loader />
                              ) : (
                                <>
                                  <Check className="w-3 h-3 mr-1" />
                                  Approve & Start Processing
                                </>
                              )}
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={(e) => handleDelete(enhancement.id, e)}
                              disabled={deletingId === enhancement.id || approvingId === enhancement.id}
                              className="text-xs h-7"
                            >
                              {deletingId === enhancement.id ? (
                                <Loader />
                              ) : (
                                <>
                                  <Trash2 className="w-3 h-3 mr-1" />
                                  Reject
                                </>
                              )}
                            </Button>
                          </div>
                        </>
                      )}

                    {enhancement.status === "failed" && enhancement.error && (
                      <>
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                          {enhancement.error}
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => handleRetry(enhancement.id, e)}
                            disabled={retryingId === enhancement.id}
                            className="text-xs h-7"
                          >
                            {retryingId === enhancement.id ? (
                              <Loader />
                            ) : (
                              <>
                                <RefreshCw className="w-3 h-3 mr-1" />
                                Retry
                              </>
                            )}
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={(e) => handleDelete(enhancement.id, e)}
                            disabled={deletingId === enhancement.id}
                            className="text-xs h-7"
                          >
                            {deletingId === enhancement.id ? (
                              <Loader />
                            ) : (
                              <>
                                <Trash2 className="w-3 h-3 mr-1" />
                                Delete
                              </>
                            )}
                          </Button>
                        </div>
                      </>
                    )}

                    {enhancement.status === "completed" &&
                    enhancement.columns && (
                      <>
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
                        <div className="flex gap-2 mt-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => handleRetry(enhancement.id, e)}
                            disabled={retryingId === enhancement.id}
                            className="text-xs h-7"
                          >
                            {retryingId === enhancement.id ? (
                              <Loader />
                            ) : (
                              <>
                                <RefreshCw className="w-3 h-3 mr-1" />
                                Re-run
                              </>
                            )}
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={(e) => handleDelete(enhancement.id, e)}
                            disabled={deletingId === enhancement.id}
                            className="text-xs h-7"
                          >
                            {deletingId === enhancement.id ? (
                              <Loader />
                            ) : (
                              <>
                                <Trash2 className="w-3 h-3 mr-1" />
                                Delete
                              </>
                            )}
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

