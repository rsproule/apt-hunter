"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewSavedQueryPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    searchType: "zipcode",
    zipCodes: "",
    enhancementQuery: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      // Validate
      if (!formData.name || !formData.zipCodes || !formData.enhancementQuery) {
        throw new Error("Please fill in all required fields");
      }

      const zipCodesArray = formData.zipCodes
        .split(",")
        .map((z) => z.trim())
        .filter(Boolean);

      if (zipCodesArray.length === 0) {
        throw new Error("Please enter at least one zip code");
      }

      // Create saved query
      const response = await fetch("/api/saved-queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-echo-user-id": "user_123", // Replace with actual user ID from auth
        },
        body: JSON.stringify({
          name: formData.name,
          description: formData.description || null,
          searchType: formData.searchType,
          searchQuery: {
            zipCodes: zipCodesArray,
            maxResults: 100,
          },
          enhancementQuery: formData.enhancementQuery,
          columnWeights: {}, // Default weights, can be customized later
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to create saved query");
      }

      const data = await response.json();

      // Optionally run the query immediately
      if (
        confirm("Saved query created! Would you like to run it now?")
      ) {
        const runResponse = await fetch(
          `/api/saved-queries/${data.savedQuery.id}/run`,
          {
            method: "POST",
            headers: {
              "x-echo-user-id": "user_123",
            },
          },
        );

        if (runResponse.ok) {
          const runData = await runResponse.json();
          router.push(`/search/${runData.scrape.id}`);
          return;
        }
      }

      // Otherwise go to saved queries list
      router.push("/saved-queries");
    } catch (err) {
      console.error("Error creating saved query:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Create Saved Query</CardTitle>
            <p className="text-sm text-gray-600">
              Save your search parameters and enhancement preferences for easy
              re-use
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
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
                  placeholder="e.g., SF Bay Area Pet-Friendly Apartments"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Optional description of what you're looking for"
                  rows={3}
                />
              </div>

              {/* Zip Codes */}
              <div>
                <Label htmlFor="zipCodes">
                  Zip Codes <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="zipCodes"
                  value={formData.zipCodes}
                  onChange={(e) =>
                    setFormData({ ...formData, zipCodes: e.target.value })
                  }
                  placeholder="e.g., 94102, 94103, 94104"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter zip codes separated by commas
                </p>
              </div>

              {/* Enhancement Query */}
              <div>
                <Label htmlFor="enhancementQuery">
                  Enhancement Query <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="enhancementQuery"
                  value={formData.enhancementQuery}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      enhancementQuery: e.target.value,
                    })
                  }
                  placeholder="e.g., pet friendly, has washer/dryer, modern kitchen, near public transit"
                  rows={4}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Describe what features you're looking for. AI will analyze
                  each listing based on these criteria.
                </p>
              </div>

              {/* Error message */}
              {error && (
                <div className="p-3 bg-red-50 text-red-600 rounded text-sm">
                  {error}
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                <Button type="submit" disabled={submitting} className="flex-1">
                  {submitting ? "Creating..." : "Create Saved Query"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/saved-queries")}
                  disabled={submitting}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}



