import ColumnWeights from "@/app/search/[id]/ColumnWeights";
import EnhancementPolling from "@/app/search/[id]/EnhancementPolling";
import ListingsTable from "@/app/search/[id]/ListingsTable";
import SearchPageClient from "@/app/search/[id]/SearchPageClient";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { prisma } from "@/lib/db";
import { Heart } from "lucide-react";
import Link from "next/link";
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

  // Fetch the search configuration
  const configuration = await prisma.searchConfiguration.findUnique({
    where: { id },
    include: {
      scrape: {
        include: {
          _count: {
            select: { listings: true },
          },
        },
      },
      enhancement: {
        include: {
          columns: {
            orderBy: { order: "asc" },
          },
        },
      },
    },
  });

  if (!configuration) {
    notFound();
  }

  const { scrape, enhancement } = configuration;
  const columnWeights = configuration.columnWeights as Record<string, number>;

  // Calculate composite scores dynamically at query time based on current column weights
  const rankedListings = await prisma.$queryRaw<
    Array<{
      listingId: string;
      totalCompositeScore: number;
    }>
  >`
    SELECT 
      sl."listingId",
      COALESCE(
        SUM(ev."normalizedValue" * ec.weight) / NULLIF(SUM(ec.weight), 0),
        0
      ) as "totalCompositeScore"
    FROM "ScrapeListing" sl
    LEFT JOIN "EnhancementResult" er ON er."listingId" = sl."listingId"
      AND er."enhancementId" = ${enhancement.id}
      AND er.status = 'completed'
    LEFT JOIN "EnhancementValue" ev ON ev."resultId" = er.id
    LEFT JOIN "EnhancementColumn" ec ON ec.id = ev."columnId"
    WHERE sl."scrapeId" = ${scrape.id}
    GROUP BY sl."listingId"
    ORDER BY "totalCompositeScore" DESC
    LIMIT ${limit}
    OFFSET ${skip}
  `;

  const rankedListingIds = rankedListings.map((r) => r.listingId);

  // Fetch the actual listings and enhancement results
  const listings = await prisma.listing.findMany({
    where: { id: { in: rankedListingIds } },
    include: {
      scrapes: {
        where: { scrapeId: scrape.id },
      },
    },
  });

  // Fetch enhancement results for these listings
  const enhancementResults = await prisma.enhancementResult.findMany({
    where: {
      enhancementId: enhancement.id,
      listingId: { in: rankedListingIds },
    },
  });

  // Create maps for quick lookup
  const listingsMap = new Map(listings.map((l) => [l.id, l]));
  const scoresMap = new Map(
    rankedListings.map((r) => [r.listingId, Number(r.totalCompositeScore)]),
  );

  // Group enhancement results by listing
  const resultsMap = new Map<
    string,
    {
      values: Record<string, boolean | number>;
      status: string;
    }
  >();

  for (const result of enhancementResults) {
    const resultValues = result.values as Record<string, boolean | number>;
    resultsMap.set(result.listingId, {
      values: resultValues,
      status: result.status,
    });
  }

  // Build results maintaining database sort order
  const listingsWithEnhancements = rankedListingIds
    .map((listingId) => {
      const listing = listingsMap.get(listingId);
      if (!listing) return null;

      const resultData = resultsMap.get(listingId);
      const compositeScore = scoresMap.get(listingId) || 0;

      return {
        listing,
        scrapeId: scrape.id,
        listingId,
        foundAt: listing.scrapes[0]?.foundAt || new Date(),
        enhancementResult: resultData
          ? {
              listingId,
              values: resultData.values,
              compositeScore,
              status: resultData.status,
            }
          : {
              listingId,
              values: {},
              compositeScore,
              status: "pending",
            },
      };
    })
    .filter(Boolean) as any;

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

  const searchQuery = scrape.searchQuery as any;
  const displayName =
    configuration.name ||
    scrape.name ||
    (scrape.searchType === "zipcode"
      ? searchQuery?.zipCodes?.join(", ")
      : "URL Search");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Auto-refresh component for pending/running searches */}
      <SearchPageClient scrapeId={scrape.id} status={scrape.status} />

      {/* Enhancement polling */}
      <EnhancementPolling enhancementId={enhancement.id} scrapeId={scrape.id} />

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
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

          {/* Review Button */}
          {scrape.status === "completed" &&
            enhancement.status === "completed" && (
              <Link href={`/search/${configuration.id}/review`}>
                <Button>
                  <Heart className="h-4 w-4 mr-2" />
                  Review Listings
                </Button>
              </Link>
            )}
        </div>

        {/* Column Weights */}
        {scrape.status === "completed" &&
          enhancement.status === "completed" &&
          enhancement.columns.length > 0 && (
            <ColumnWeights
              enhancementIds={[enhancement.id]}
              scrapeId={scrape.id}
              columns={enhancement.columns.map((c) => ({
                id: c.id,
                name: c.name,
                type: c.type,
                description: c.description,
                weight: columnWeights[c.name] ?? c.weight,
                inverted: false,
              }))}
            />
          )}

        {/* Listings */}
        {scrape.status === "completed" && totalListings > 0 ? (
          <ListingsTable
            listings={listingsWithEnhancements}
            totalItems={totalListings}
            currentPage={page}
            itemsPerPage={limit}
            totalPages={totalPages}
            enhancementColumns={enhancement.columns}
          />
        ) : scrape.status === "running" || scrape.status === "pending" ? (
          <Card>
            <CardContent className="py-12">
              <div className="flex flex-col items-center gap-6">
                <div className="text-center space-y-2">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {scrape.status === "pending"
                      ? "Starting search..."
                      : "Searching for listings..."}
                  </p>

                  {totalListings > 0 && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {totalListings} listings found so far
                    </p>
                  )}
                </div>
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
