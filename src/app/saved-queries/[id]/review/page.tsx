"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

interface Listing {
  id: string;
  zpid: string;
  detailUrl: string;
  imgSrc: string | null;
  photos: string[];
  statusType: string;
  statusText: string;
  price: number;
  priceFormatted: string | null;
  address: string;
  addressCity: string | null;
  addressState: string | null;
  beds: number | null;
  baths: number | null;
  area: number | null;
  homeType: string | null;
  compositeScore: number;
  enhancementResults: Array<{
    values: Record<string, boolean | number>;
  }>;
}

interface Enhancement {
  id: string;
  query: string;
  columns: Array<{
    id: string;
    name: string;
    type: string;
    description: string;
  }>;
}

export default function ReviewPage() {
  const params = useParams();
  const router = useRouter();
  const savedQueryId = params.id as string;

  const [listings, setListings] = useState<Listing[]>([]);
  const [enhancements, setEnhancements] = useState<Enhancement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    fetchUnratedListings();
  }, [savedQueryId]);

  const fetchUnratedListings = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/saved-queries/${savedQueryId}/unrated`,
        {
          headers: {
            "x-echo-user-id": "user_123", // Replace with actual user ID from auth
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch listings");
      }

      const data = await response.json();
      setListings(data.listings || []);
      setEnhancements(data.enhancements || []);
      
      // Check if there's a message (e.g., no scrape run yet)
      if (data.message) {
        setError(data.message);
      } else {
        setError(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleRunQuery = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/saved-queries/${savedQueryId}/run`, {
        method: "POST",
        headers: {
          "x-echo-user-id": "user_123",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to run query");
      }

      const data = await response.json();
      // Redirect to the scrape results page
      router.push(`/search/${data.scrape.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to run query");
      setLoading(false);
    }
  };

  const handleResponse = async (response: "like" | "dislike") => {
    if (submitting || currentIndex >= listings.length) return;

    const currentListing = listings[currentIndex];
    setSubmitting(true);

    try {
      const res = await fetch("/api/listings/respond", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-echo-user-id": "user_123", // Replace with actual user ID from auth
        },
        body: JSON.stringify({
          savedQueryId,
          listingId: currentListing.id,
          response,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to save response");
      }

      // Move to next listing
      if (currentIndex < listings.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setCurrentPhotoIndex(0);
      } else {
        // All listings reviewed
        router.push(`/saved-queries/${savedQueryId}/liked`);
      }
    } catch (err) {
      console.error("Error saving response:", err);
      alert("Failed to save response. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (submitting) return;
    if (e.key === "ArrowLeft") {
      handleResponse("dislike");
    } else if (e.key === "ArrowRight") {
      handleResponse("like");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentIndex, submitting]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
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
    const isNoScrapeError = error.includes("No scrape has been run");
    
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-gray-600 mb-4">{error}</p>
            {isNoScrapeError ? (
              <div className="flex gap-4 justify-center">
                <Button onClick={handleRunQuery}>
                  Run Query Now
                </Button>
                <Button
                  variant="outline"
                  onClick={() => router.push("/saved-queries")}
                >
                  Back to Queries
                </Button>
              </div>
            ) : (
              <Button onClick={fetchUnratedListings}>
                Retry
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (listings.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-gray-600 mb-4">
              No unrated listings found. You've reviewed them all!
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => router.push(`/saved-queries/${savedQueryId}/liked`)}>
                View Liked Listings
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push(`/saved-queries/${savedQueryId}`)}
              >
                Back to Saved Query
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentListing = listings[currentIndex];
  const photos = currentListing.photos.length > 0 
    ? currentListing.photos 
    : currentListing.imgSrc 
    ? [currentListing.imgSrc] 
    : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress indicator */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold">Review Listings</h1>
            <Badge variant="outline">
              {currentIndex + 1} / {listings.length}
            </Badge>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{
                width: `${((currentIndex + 1) / listings.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Main listing card */}
        <Card className="overflow-hidden">
          {/* Image carousel */}
          {photos.length > 0 && (
            <div className="relative aspect-video bg-gray-100">
              <Image
                src={photos[currentPhotoIndex]}
                alt={currentListing.address}
                fill
                className="object-cover"
              />
              
              {/* Photo navigation */}
              {photos.length > 1 && (
                <>
                  <div className="absolute inset-0 flex items-center justify-between p-4">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full bg-white/80 hover:bg-white"
                      onClick={() =>
                        setCurrentPhotoIndex(
                          currentPhotoIndex === 0
                            ? photos.length - 1
                            : currentPhotoIndex - 1,
                        )
                      }
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full bg-white/80 hover:bg-white"
                      onClick={() =>
                        setCurrentPhotoIndex(
                          currentPhotoIndex === photos.length - 1
                            ? 0
                            : currentPhotoIndex + 1,
                        )
                      }
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {photos.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full ${
                          idx === currentPhotoIndex
                            ? "bg-white"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Composite score badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-blue-600 text-white">
                  Score: {currentListing.compositeScore.toFixed(1)}
                </Badge>
              </div>
            </div>
          )}

          <CardContent className="p-6">
            {/* Price and status */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-3xl font-bold mb-1">
                  {formatPrice(currentListing.price)}
                </h2>
                <Badge variant="outline">{currentListing.statusText}</Badge>
              </div>
            </div>

            {/* Address */}
            <p className="text-lg mb-4">{currentListing.address}</p>

            {/* Property details */}
            <div className="flex gap-4 mb-6 text-gray-600">
              {currentListing.beds && (
                <span>{currentListing.beds} beds</span>
              )}
              {currentListing.baths && (
                <span>{currentListing.baths} baths</span>
              )}
              {currentListing.area && (
                <span>{currentListing.area.toLocaleString()} sq ft</span>
              )}
              {currentListing.homeType && (
                <span>{currentListing.homeType}</span>
              )}
            </div>

            {/* Enhancement results */}
            {enhancements.length > 0 && currentListing.enhancementResults.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">AI Analysis</h3>
                {enhancements.map((enhancement) => {
                  const result = currentListing.enhancementResults.find(
                    (r) => r.values,
                  );
                  if (!result) return null;

                  return (
                    <div key={enhancement.id} className="space-y-2">
                      {enhancement.columns.map((column) => {
                        const value = result.values[column.name];
                        if (value === undefined) return null;

                        return (
                          <div
                            key={column.id}
                            className="flex justify-between items-center py-2 border-b"
                          >
                            <span className="text-sm font-medium">
                              {column.description}
                            </span>
                            {column.type === "boolean" ? (
                              <Badge
                                variant={value ? "default" : "outline"}
                              >
                                {value ? "Yes" : "No"}
                              </Badge>
                            ) : (
                              <Badge variant="outline">
                                {value}/10
                              </Badge>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex gap-4 mt-8">
              <Button
                size="lg"
                variant="outline"
                className="flex-1 h-16 text-lg"
                onClick={() => handleResponse("dislike")}
                disabled={submitting}
              >
                <X className="h-6 w-6 mr-2" />
                Pass
                <span className="text-sm text-gray-500 ml-2">(←)</span>
              </Button>
              <Button
                size="lg"
                className="flex-1 h-16 text-lg bg-green-600 hover:bg-green-700"
                onClick={() => handleResponse("like")}
                disabled={submitting}
              >
                <Heart className="h-6 w-6 mr-2" />
                Like
                <span className="text-sm ml-2">(→)</span>
              </Button>
            </div>

            {/* View on Zillow link */}
            <div className="mt-4 text-center">
              <a
                href={currentListing.detailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on Zillow →
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Keyboard shortcuts hint */}
        <div className="mt-4 text-center text-sm text-gray-500">
          Use arrow keys: ← to pass, → to like
        </div>
      </div>
    </div>
  );
}

