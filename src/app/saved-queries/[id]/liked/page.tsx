"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ExternalLink } from "lucide-react";
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

interface Response {
  id: string;
  createdAt: string;
  notes: string | null;
  listing: Listing;
}

interface Pagination {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
}

export default function LikedListingsPage() {
  const params = useParams();
  const router = useRouter();
  const savedQueryId = params.id as string;

  const [responses, setResponses] = useState<Response[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLikedListings();
  }, [savedQueryId]);

  const fetchLikedListings = async (page = 1) => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/listings/liked?savedQueryId=${savedQueryId}&page=${page}`,
        {
          headers: {
            "x-echo-user-id": "user_123", // Replace with actual user ID from auth
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch liked listings");
      }

      const data = await response.json();
      setResponses(data.responses);
      setPagination(data.pagination);
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
            <Button onClick={() => fetchLikedListings()} className="mt-4">
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
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Heart className="h-8 w-8 text-red-500" fill="currentColor" />
              Liked Listings
            </h1>
            <p className="text-gray-600">
              {pagination?.totalCount || 0} listing(s) you've liked
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => router.push(`/saved-queries/${savedQueryId}/review`)}
            >
              Continue Reviewing
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push(`/saved-queries/${savedQueryId}`)}
            >
              Back to Query
            </Button>
          </div>
        </div>

        {/* Listings grid */}
        {responses.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-gray-600 mb-4">
                You haven't liked any listings yet.
              </p>
              <Button
                onClick={() => router.push(`/saved-queries/${savedQueryId}/review`)}
              >
                Start Reviewing
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {responses.map((response) => {
                const listing = response.listing;
                const mainPhoto =
                  listing.photos[0] || listing.imgSrc || "/placeholder.jpg";

                return (
                  <Card
                    key={response.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Image */}
                    <div className="relative aspect-video bg-gray-100">
                      <Image
                        src={mainPhoto}
                        alt={listing.address}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-green-600 text-white">
                          <Heart className="h-3 w-3 mr-1" fill="currentColor" />
                          Liked
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      {/* Price */}
                      <div className="mb-2">
                        <h3 className="text-2xl font-bold">
                          {formatPrice(listing.price)}
                        </h3>
                        <Badge variant="outline" className="mt-1">
                          {listing.statusText}
                        </Badge>
                      </div>

                      {/* Address */}
                      <p className="text-sm text-gray-600 mb-3">
                        {listing.address}
                      </p>

                      {/* Property details */}
                      <div className="flex gap-3 text-sm text-gray-600 mb-4">
                        {listing.beds && <span>{listing.beds} beds</span>}
                        {listing.baths && <span>{listing.baths} baths</span>}
                        {listing.area && (
                          <span>{listing.area.toLocaleString()} sq ft</span>
                        )}
                      </div>

                      {/* Notes */}
                      {response.notes && (
                        <div className="mb-3 p-2 bg-gray-50 rounded text-sm">
                          <p className="text-gray-700">{response.notes}</p>
                        </div>
                      )}

                      {/* Action buttons */}
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() => window.open(listing.detailUrl, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View on Zillow
                        </Button>
                      </div>

                      {/* Liked date */}
                      <p className="text-xs text-gray-500 mt-3">
                        Liked on{" "}
                        {new Date(response.createdAt).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Pagination */}
            {pagination && pagination.totalPages > 1 && (
              <div className="mt-8 flex justify-center gap-2">
                <Button
                  variant="outline"
                  disabled={pagination.page === 1}
                  onClick={() => fetchLikedListings(pagination.page - 1)}
                >
                  Previous
                </Button>
                <div className="flex items-center px-4">
                  Page {pagination.page} of {pagination.totalPages}
                </div>
                <Button
                  variant="outline"
                  disabled={pagination.page === pagination.totalPages}
                  onClick={() => fetchLikedListings(pagination.page + 1)}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}



