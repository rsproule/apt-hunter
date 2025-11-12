"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Bookmark } from "lucide-react";
import { useRouter } from "next/navigation";

interface SaveQueryButtonProps {
  scrapeId: string;
  searchType: string;
  searchQuery: any;
  enhancementQuery?: string;
  columnWeights?: Record<string, number>;
}

export default function SaveQueryButton({
  scrapeId,
  searchType,
  searchQuery,
  enhancementQuery,
  columnWeights,
}: SaveQueryButtonProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!enhancementQuery) {
      setError("Please create an enhancement first before saving the query");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      if (!formData.name) {
        throw new Error("Please enter a name for the saved query");
      }

      const response = await fetch("/api/saved-queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-echo-user-id": "user_123", // Replace with actual user ID from auth
        },
        body: JSON.stringify({
          name: formData.name,
          description: formData.description || null,
          searchType,
          searchQuery,
          enhancementQuery,
          columnWeights: columnWeights || {},
          scrapeId, // Link to the current scrape
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to save query");
      }

      const data = await response.json();

      // Close dialog and redirect
      setOpen(false);
      router.push(`/saved-queries/${data.savedQuery.id}`);
    } catch (err) {
      console.error("Error saving query:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Bookmark className="h-4 w-4 mr-2" />
          Save as Query
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save as Query</DialogTitle>
          <DialogDescription>
            Save this search and enhancement configuration for easy re-use
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">
              Query Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="e.g., SF Pet-Friendly Apartments"
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Optional description"
              rows={3}
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-600 rounded text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <Button type="submit" disabled={submitting} className="flex-1">
              {submitting ? "Saving..." : "Save Query"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={submitting}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

