import ListingsTable from "@/app/search/[id]/ListingsTable";
import SearchPageClient from "@/app/search/[id]/SearchPageClient";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

interface SearchPageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    page?: string;
    limit?: string;
  }>;
}

export default async function SearchPage({
  params,
  searchParams,
}: SearchPageProps) {
  const { id } = await params;
  const { page: pageParam, limit: limitParam } = await searchParams;

  // Parse pagination params
  const page = pageParam ? Number.parseInt(pageParam, 10) : 1;
  const limit = limitParam ? Number.parseInt(limitParam, 10) : 25;
  const skip = (page - 1) * limit;

  // Fetch the scrape metadata and total count
  const scrape = await prisma.scrape.findUnique({
    where: { id },
    include: {
      _count: {
        select: { listings: true },
      },
    },
  });

  if (!scrape) {
    notFound();
  }

  // Fetch paginated listings
  const listings = await prisma.scrapeListing.findMany({
    where: { scrapeId: id },
    include: {
      listing: true,
    },
    orderBy: {
      foundAt: "desc",
    },
    skip,
    take: limit,
  });

  const totalListings = scrape._count.listings;
  const totalPages = Math.ceil(totalListings / limit);

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

        {/* Listings */}
        {scrape.status === "completed" && totalListings > 0 ? (
          <ListingsTable
            listings={listings}
            totalItems={totalListings}
            currentPage={page}
            itemsPerPage={limit}
            totalPages={totalPages}
          />
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
