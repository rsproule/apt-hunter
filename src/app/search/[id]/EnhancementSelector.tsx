"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Loader2, Plus, Sparkles } from "lucide-react";

interface Enhancement {
  id: string;
  query: string;
  status: string;
  error: string | null;
  processedCount: number;
  totalCount: number;
  createdAt: string;
  columns: Array<{
    name: string;
    type: string;
    description: string;
  }>;
}

interface EnhancementSelectorProps {
  scrapeId: string;
  allEnhancements: Enhancement[];
  activeEnhancementIds: string[];
}

export default function EnhancementSelector({
  scrapeId,
  allEnhancements,
  activeEnhancementIds,
}: EnhancementSelectorProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [newQuery, setNewQuery] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleToggleEnhancement = (enhancementId: string) => {
    const currentIds = activeEnhancementIds;
    const newIds = currentIds.includes(enhancementId)
      ? currentIds.filter((id) => id !== enhancementId)
      : [...currentIds, enhancementId];

    const params = new URLSearchParams(searchParams.toString());
    if (newIds.length > 0) {
      params.set("enhancements", newIds.join(","));
    } else {
      params.delete("enhancements");
    }

    router.push(`/search/${scrapeId}?${params.toString()}`);
  };

  const handleCreateEnhancement = async () => {
    if (!newQuery.trim()) return;

    setIsCreating(true);
    try {
      const response = await fetch("/api/enhancements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          scrapeId,
          query: newQuery.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create enhancement");
      }

      const data = await response.json();

      // Add the new enhancement to the active list
      const params = new URLSearchParams(searchParams.toString());
      const newIds = [...activeEnhancementIds, data.enhancement.id];
      params.set("enhancements", newIds.join(","));

      setIsOpen(false);
      setNewQuery("");
      router.push(`/search/${scrapeId}?${params.toString()}`);
    } catch (error) {
      console.error("Error creating enhancement:", error);
      alert("Failed to create enhancement");
    } finally {
      setIsCreating(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500";
      case "processing":
        return "bg-blue-500";
      case "failed":
        return "bg-red-500";
      case "pending":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Sparkles className="h-4 w-4 mr-2" />
          {activeEnhancementIds.length > 0
            ? `AI Analysis (${activeEnhancementIds.length})`
            : "Add AI Analysis"}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>AI Analysis</DialogTitle>
          <DialogDescription>
            Select existing analyses or create a new one to score listings
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 overflow-y-auto pr-2 flex-1">
          {/* Existing Enhancements */}
          {allEnhancements.length > 0 && (
            <div className="space-y-3">
              <Label>Previous Analyses</Label>
              <div className="space-y-2 max-h-[40vh] overflow-y-auto">
                {allEnhancements.map((enhancement) => (
                  <div
                    key={enhancement.id}
                    className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
                    onClick={() => handleToggleEnhancement(enhancement.id)}
                  >
                    <input
                      type="checkbox"
                      checked={activeEnhancementIds.includes(enhancement.id)}
                      onChange={() => {}}
                      className="mt-1"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {enhancement.query}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          className={`${getStatusColor(enhancement.status)} text-white text-xs`}
                        >
                          {enhancement.status}
                        </Badge>
                        {enhancement.status === "completed" && (
                          <span className="text-xs text-gray-500">
                            {enhancement.columns.length} columns
                          </span>
                        )}
                        {enhancement.status === "processing" && (
                          <span className="text-xs text-gray-500">
                            {Math.round(
                              (enhancement.processedCount / enhancement.totalCount) *
                                100,
                            )}
                            % complete
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Create New Enhancement */}
          <div className="space-y-3">
            <Label>Create New Analysis</Label>
            <Textarea
              value={newQuery}
              onChange={(e) => setNewQuery(e.target.value)}
              placeholder="e.g., modern kitchen with stainless steel appliances, hardwood floors, lots of natural light"
              rows={4}
              disabled={isCreating}
            />
            <p className="text-xs text-gray-500">
              Describe features you care about. AI will analyze photos from each
              listing.
            </p>
            <Button
              onClick={handleCreateEnhancement}
              disabled={!newQuery.trim() || isCreating}
              className="w-full"
            >
              {isCreating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Creating Analysis...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  Create & Apply
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

