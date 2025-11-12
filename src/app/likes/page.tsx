"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ExternalLink,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Trash2,
  Heart,
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
}

interface LikedListing {
  listing: Listing;
  configurations: Array<{
    id: string;
    name: string | null;
    likedAt: string;
  }>;
}

export default function LikesPage() {
  const router = useRouter();
  const [likedListings, setLikedListings] = useState<LikedListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLikedListings();
  }, []);

  const fetchLikedListings = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/listings/liked");

      if (!response.ok) {
        throw new Error("Failed to fetch liked listings");
      }

      const data = await response.json();
      setLikedListings(data.listings);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

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
            <Button onClick={fetchLikedListings}>Retry</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-2">
            <Button variant="ghost" onClick={() => router.push("/")}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Home
            </Button>
          </div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Heart className="h-8 w-8 text-rose-500 fill-current" />
            All Liked Listings
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {likedListings.length} unique {likedListings.length === 1 ? "listing" : "listings"} across all your searches
          </p>
        </div>

        {/* Listings Grid */}
        {likedListings.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You haven't liked any listings yet.
              </p>
              <Button onClick={() => router.push("/")}>
                Start Searching
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {likedListings.map(({ listing, configurations }) => (
              <Card
                key={listing.id}
                className="overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {/* Image */}
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                  {listing.imgSrc ? (
                    <Image
                      src={listing.imgSrc}
                      alt={listing.address}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      No image
                    </div>
                  )}

                  {/* Actions overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                    <a
                      href={listing.detailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-3 rounded-full hover:scale-110 transition-transform"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>

                  {/* Photo count */}
                  {listing.photos.length > 1 && (
                    <div className="absolute bottom-2 right-2">
                      <Badge className="bg-black/70 text-white text-xs">
                        {listing.photos.length} photos
                      </Badge>
                    </div>
                  )}

                  {/* Multiple search indicator */}
                  {configurations.length > 1 && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-rose-500 text-white text-xs">
                        ❤️ {configurations.length}x
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-4 space-y-3">
                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">
                      {formatPrice(listing.price)}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {listing.statusType}
                    </Badge>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                    <p className="line-clamp-2">{listing.address}</p>
                  </div>

                  {/* Property Details */}
                  <div className="flex gap-4 text-sm text-gray-700 dark:text-gray-300">
                    {listing.beds && (
                      <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4" />
                        <span>{listing.beds}</span>
                      </div>
                    )}
                    {listing.baths && (
                      <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        <span>{listing.baths}</span>
                      </div>
                    )}
                    {listing.area && (
                      <div className="flex items-center gap-1">
                        <Maximize className="h-4 w-4" />
                        <span>{listing.area.toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  {listing.homeType && (
                    <Badge variant="secondary" className="text-xs">
                      {listing.homeType}
                    </Badge>
                  )}

                  {/* Liked from configurations */}
                  {configurations.length > 0 && (
                    <div className="pt-2 border-t text-xs text-gray-500 dark:text-gray-400">
                      <p className="font-medium mb-1">Liked from:</p>
                      <div className="space-y-1">
                        {configurations.map((config) => (
                          <div key={config.id} className="flex items-center justify-between">
                            <button
                              onClick={() => router.push(`/search/${config.id}`)}
                              className="text-blue-600 hover:underline truncate"
                            >
                              {config.name || "Search"}
                            </button>
                            <span className="text-xs text-gray-400 ml-2">
                              {new Date(config.likedAt).toLocaleDateString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        {likedListings.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Export Your Favorites</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                Ready to reach out? Export your liked listings.
              </p>
              <Button
                onClick={() => {
                  const urls = likedListings
                    .map((l) => l.listing.detailUrl)
                    .join("\n");
                  navigator.clipboard.writeText(urls);
                  alert("All listing URLs copied to clipboard!");
                }}
              >
                Copy All URLs
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

