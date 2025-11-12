"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Heart,
  X,
  SkipForward,
  ChevronLeft,
  ExternalLink,
  MapPin,
  Bed,
  Bath,
  Maximize,
  RotateCcw,
} from "lucide-react";
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
  enhancementResults: any[];
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

interface ReviewPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ReviewPage({ params }: ReviewPageProps) {
  const router = useRouter();
  const [configurationId, setConfigurationId] = useState<string | null>(null);
  const [listings, setListings] = useState<Listing[]>([]);
  const [enhancements, setEnhancements] = useState<Enhancement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Unwrap params
  useEffect(() => {
    params.then((p) => setConfigurationId(p.id));
  }, [params]);

  // Fetch unrated listings
  useEffect(() => {
    if (!configurationId) return;

    const fetchListings = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/configurations/${configurationId}/unrated`);

        if (!response.ok) {
          throw new Error("Failed to fetch listings");
        }

        const data = await response.json();
        setListings(data.listings);
        setEnhancements(data.enhancements || []);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [configurationId]);

  const currentListing = listings[currentIndex];

  const handleResponse = useCallback(
    async (response: "like" | "dislike" | "pass") => {
      if (!currentListing || !configurationId || submitting) return;

      try {
        setSubmitting(true);

        const res = await fetch("/api/listings/respond", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            configurationId,
            listingId: currentListing.id,
            response,
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to submit response");
        }

        // Move to next listing
        if (currentIndex < listings.length - 1) {
          setCurrentIndex(currentIndex + 1);
          setCurrentPhotoIndex(0); // Reset to first photo
        } else {
          // No more listings
          router.push(`/search/${configurationId}`);
        }
      } catch (err) {
        console.error("Error submitting response:", err);
        alert("Failed to submit response. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
    [currentListing, configurationId, submitting, currentIndex, listings.length, router],
  );

  const handleReset = useCallback(async () => {
    if (!configurationId || resetting) return;

    if (!confirm("Clear all passes and dislikes? You'll be able to review them again. (Your likes will be kept)")) {
      return;
    }

    try {
      setResetting(true);
      const response = await fetch(`/api/configurations/${configurationId}/reset`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to reset");
      }

      const data = await response.json();
      
      // Reload listings to get the cleared ones back
      const listingsResponse = await fetch(`/api/configurations/${configurationId}/unrated`);
      if (listingsResponse.ok) {
        const listingsData = await listingsResponse.json();
        setListings(listingsData.listings);
        setCurrentIndex(0);
        setCurrentPhotoIndex(0);
      }

      alert(data.message);
    } catch (err) {
      console.error("Error resetting:", err);
      alert("Failed to reset. Please try again.");
    } finally {
      setResetting(false);
    }
  }, [configurationId, resetting]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (submitting) return;

      const photoCount = currentListing?.photos.length || 0;

      switch (e.key) {
        case "ArrowLeft":
          // Navigate to previous photo
          if (photoCount > 0) {
            setCurrentPhotoIndex((prev) => (prev > 0 ? prev - 1 : photoCount - 1));
          }
          break;
        case "ArrowRight":
          // Navigate to next photo
          if (photoCount > 0) {
            setCurrentPhotoIndex((prev) => (prev < photoCount - 1 ? prev + 1 : 0));
          }
          break;
        case "x":
          handleResponse("dislike");
          break;
        case "h":
          handleResponse("like");
          break;
        case "s":
          handleResponse("pass");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleResponse, submitting, currentListing]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="py-12 text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <Button onClick={() => router.push(`/search/${configurationId}`)}>
              Back to Search
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!currentListing) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="py-12 text-center space-y-4">
            <div className="text-6xl">🎉</div>
            <h2 className="text-2xl font-bold">All Done!</h2>
            <p className="text-gray-600 dark:text-gray-400">
              You've reviewed all available listings for this search.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 justify-center">
                <Button onClick={() => router.push(`/likes`)}>
                  View All Liked
                </Button>
                <Button
                  variant="outline"
                  onClick={() => router.push(`/search/${configurationId}`)}
                >
                  Back to Search
                </Button>
              </div>
              <Button
                variant="outline"
                onClick={handleReset}
                disabled={resetting}
                className="w-full"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                {resetting ? "Resetting..." : "Reset & Review Again"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Get enhancement values for current listing
  const enhancementValues: Record<string, number> = {};
  if (currentListing.enhancementResults?.length > 0) {
    for (const result of currentListing.enhancementResults) {
      const values = result.values as Record<string, number>;
      Object.assign(enhancementValues, values);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => router.push(`/search/${configurationId}`)}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Progress
            </p>
            <p className="text-lg font-bold">
              {currentIndex + 1} / {listings.length}
            </p>
          </div>
          <Button
            variant="ghost"
            onClick={handleReset}
            disabled={resetting}
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>

        {/* Main Card */}
        <Card className="overflow-hidden shadow-2xl">
          {/* Image Carousel */}
          <div className="relative h-96 bg-gray-200 dark:bg-gray-700">
            {currentListing.photos.length > 0 ? (
              <Image
                src={currentListing.photos[currentPhotoIndex]}
                alt={currentListing.address}
                fill
                className="object-cover"
                priority
              />
            ) : currentListing.imgSrc ? (
              <Image
                src={currentListing.imgSrc}
                alt={currentListing.address}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                No image available
              </div>
            )}

            {/* Score Badge */}
            {currentListing.compositeScore > 0 && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-white text-black text-lg px-3 py-1 shadow-lg">
                  {currentListing.compositeScore.toFixed(1)} ⭐
                </Badge>
              </div>
            )}

            {/* Photo navigation */}
            {currentListing.photos.length > 1 && (
              <>
                {/* Photo counter */}
                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-black/70 text-white">
                    {currentPhotoIndex + 1} / {currentListing.photos.length}
                  </Badge>
                </div>
                
                {/* Photo dots indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {currentListing.photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentPhotoIndex
                          ? "bg-white w-6"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to photo ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <CardContent className="p-6 space-y-4">
            {/* Price */}
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">
                {formatPrice(currentListing.price)}
              </h2>
              <a
                href={currentListing.detailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
              <p className="text-lg">{currentListing.address}</p>
            </div>

            {/* Property Details */}
            <div className="flex gap-6 text-gray-700 dark:text-gray-300">
              {currentListing.beds && (
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5" />
                  <span className="font-medium">{currentListing.beds} beds</span>
                </div>
              )}
              {currentListing.baths && (
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5" />
                  <span className="font-medium">{currentListing.baths} baths</span>
                </div>
              )}
              {currentListing.area && (
                <div className="flex items-center gap-2">
                  <Maximize className="h-5 w-5" />
                  <span className="font-medium">
                    {currentListing.area.toLocaleString()} sqft
                  </span>
                </div>
              )}
            </div>

            {currentListing.homeType && (
              <Badge variant="outline">{currentListing.homeType}</Badge>
            )}

            {/* AI Scores - Compact with Tooltips */}
            {enhancements.length > 0 && (
              <div className="border-t pt-3">
                <TooltipProvider>
                  <div className="flex flex-wrap gap-2">
                    {enhancements.flatMap((enhancement) =>
                      enhancement.columns.map((column) => {
                        const value = enhancementValues[column.name];
                        if (value === undefined) return null;

                        // Calculate color based on score
                        const scorePercent = value * 10;
                        let dotColor = "bg-gray-400";
                        if (scorePercent >= 70) dotColor = "bg-green-500";
                        else if (scorePercent >= 40) dotColor = "bg-yellow-500";
                        else dotColor = "bg-red-500";

                        return (
                          <Tooltip key={column.id}>
                            <TooltipTrigger asChild>
                              <div className="flex items-center gap-1.5 text-xs cursor-help">
                                <div className={`w-2 h-2 rounded-full ${dotColor}`} />
                                <span className="text-gray-700 dark:text-gray-300 font-medium">
                                  {column.type === "boolean"
                                    ? value >= 5
                                      ? "✓"
                                      : "✗"
                                    : value.toFixed(0)}
                                </span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="font-medium">{column.description}</p>
                              <p className="text-xs text-gray-400 mt-1">
                                {column.type === "boolean"
                                  ? value >= 5
                                    ? "Yes"
                                    : "No"
                                  : `Score: ${value.toFixed(1)}/10`}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        );
                      }),
                    )}
                  </div>
                </TooltipProvider>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="outline"
            className="h-16 w-16 rounded-full border-2 border-red-500 hover:bg-red-50 dark:hover:bg-red-950"
            onClick={() => handleResponse("dislike")}
            disabled={submitting}
          >
            <X className="h-8 w-8 text-red-500" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-16 w-16 rounded-full border-2 border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            onClick={() => handleResponse("pass")}
            disabled={submitting}
          >
            <SkipForward className="h-8 w-8 text-gray-500" />
          </Button>

          <Button
            size="lg"
            className="h-20 w-20 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600"
            onClick={() => handleResponse("like")}
            disabled={submitting}
          >
            <Heart className="h-10 w-10 text-white" />
          </Button>
        </div>

        {/* Keyboard Shortcuts Help */}
        <Card className="bg-gray-50 dark:bg-gray-800">
          <CardContent className="py-3">
            <p className="text-xs text-center text-gray-600 dark:text-gray-400">
              <kbd className="px-2 py-1 bg-white dark:bg-gray-700 rounded border">←→</kbd> Photos •{" "}
              <kbd className="px-2 py-1 bg-white dark:bg-gray-700 rounded border">X</kbd> Dislike •{" "}
              <kbd className="px-2 py-1 bg-white dark:bg-gray-700 rounded border">S</kbd> Pass •{" "}
              <kbd className="px-2 py-1 bg-white dark:bg-gray-700 rounded border">H</kbd> Like
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

