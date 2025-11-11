import ListingCard from "@/app/search/[id]/ListingCard";
import SearchPageClient from "@/app/search/[id]/SearchPageClient";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

interface SearchPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SearchPage({ params }: SearchPageProps) {
  const { id } = await params;

  // Fetch the scrape with its listings
  const scrape = await prisma.scrape.findUnique({
    where: { id },
    include: {
      listings: {
        include: {
          listing: true,
        },
        orderBy: {
          foundAt: "desc",
        },
      },
    },
  });

  if (!scrape) {
    notFound();
  }

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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const searchQuery = scrape.searchQuery as any;
  const displayName =
    scrape.name ||
    (scrape.searchType === "zipcode"
      ? searchQuery?.zipCodes?.join(", ")
      : "URL Search");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Auto-refresh component for pending/running searches */}
      <SearchPageClient scrapeId={scrape.id} status={scrape.status} />
      
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">{displayName}</h1>
            <Badge className={`${getStatusColor(scrape.status)} text-white`}>
              {scrape.status}
            </Badge>
          </div>
          <p className="text-gray-600">
            {scrape.listingsCount} listings found •{" "}
            {new Date(scrape.createdAt).toLocaleDateString()} at{" "}
            {new Date(scrape.createdAt).toLocaleTimeString()}
          </p>
        </div>

        {/* Search Details */}
        <Card>
          <CardHeader>
            <CardTitle>Search Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Search Type
                </dt>
                <dd className="mt-1 capitalize">{scrape.searchType}</dd>
              </div>
              {scrape.searchType === "zipcode" && searchQuery && (
                <>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      ZIP Codes
                    </dt>
                    <dd className="mt-1">
                      {searchQuery.zipCodes?.join(", ") || "N/A"}
                    </dd>
                  </div>
                  {searchQuery.priceMax && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Max Price
                      </dt>
                      <dd className="mt-1">
                        {formatPrice(searchQuery.priceMax)}
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Type</dt>
                    <dd className="mt-1">
                      {searchQuery.forRent ? "For Rent" : "For Sale"}
                    </dd>
                  </div>
                </>
              )}
              {scrape.durationMs && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Duration
                  </dt>
                  <dd className="mt-1">
                    {(scrape.durationMs / 1000).toFixed(1)}s
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-sm font-medium text-gray-500">Run ID</dt>
                <dd className="mt-1 font-mono text-sm">{scrape.apifyRunId}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        {/* Listings */}
        {scrape.status === "completed" && scrape.listings.length > 0 ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Listings</h2>
            <p className="text-sm text-gray-500">
              Click on any card to see raw JSON and database data in console
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {scrape.listings.map(({ listing }) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        ) : scrape.status === "running" || scrape.status === "pending" ? (
          <Card>
            <CardContent className="py-12 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
                <p className="text-gray-600">
                  {scrape.status === "pending"
                    ? "Starting search..."
                    : "Searching for listings..."}
                </p>
                <p className="text-sm text-gray-500">
                  This page will automatically refresh when results are ready
                </p>
              </div>
            </CardContent>
          </Card>
        ) : scrape.status === "failed" ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-red-600">
                Search failed: {scrape.error || "Unknown error"}
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-gray-600">No listings found</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

