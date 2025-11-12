import ColumnWeights from "@/app/search/[id]/ColumnWeights";
import EnhancementPolling from "@/app/search/[id]/EnhancementPolling";
import EnhancementSelector from "@/app/search/[id]/EnhancementSelector";
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
    enhancements?: string; // Comma-separated enhancement IDs
  }>;
}

export default async function SearchPage({
  params,
  searchParams,
}: SearchPageProps) {
  const { id } = await params;
  const {
    page: pageParam,
    limit: limitParam,
    enhancements: enhancementsParam,
  } = await searchParams;

  // Parse pagination params
  const page = pageParam ? Number.parseInt(pageParam, 10) : 1;
  const limit = limitParam ? Number.parseInt(limitParam, 10) : 25;
  const skip = (page - 1) * limit;

  // Parse enhancement IDs (comma-separated)
  const activeEnhancementIds = enhancementsParam
    ? enhancementsParam.split(",").filter(Boolean)
    : [];

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

  // Fetch all enhancements for this scrape
  const allEnhancements = await prisma.enhancement.findMany({
    where: { scrapeId: id },
    orderBy: { createdAt: "desc" },
    include: {
      columns: {
        orderBy: { order: "asc" },
      },
    },
  });

  // Fetch details for active enhancements
  const activeEnhancements = allEnhancements.filter((e) =>
    activeEnhancementIds.includes(e.id),
  );

  // Collect all columns from active enhancements
  const enhancementColumns = activeEnhancements.flatMap((e) => e.columns);

  // Fetch listings with enhancements
  let listingsWithEnhancements;

  if (activeEnhancementIds.length > 0) {
    // Calculate composite scores dynamically at query time based on current column weights
    // This ensures scores are always fresh and all listings are included
    // When inverted=true, we flip the score (10 - normalizedValue) for undesirable traits
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
        AND er."enhancementId" = ANY(${activeEnhancementIds}::text[])
        AND er.status = 'completed'
      LEFT JOIN "EnhancementValue" ev ON ev."resultId" = er.id
      LEFT JOIN "EnhancementColumn" ec ON ec.id = ev."columnId"
      WHERE sl."scrapeId" = ${id}
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
          where: { scrapeId: id },
        },
      },
    });

    // Fetch enhancement results for these listings
    const enhancementResults = await prisma.enhancementResult.findMany({
      where: {
        enhancementId: { in: activeEnhancementIds },
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
      const existing = resultsMap.get(result.listingId);
      const resultValues = result.values as Record<string, boolean | number>;

      if (existing) {
        existing.values = { ...existing.values, ...resultValues };
        if (result.status !== "completed") {
          existing.status = result.status;
        }
      } else {
        resultsMap.set(result.listingId, {
          values: resultValues,
          status: result.status,
        });
      }
    }

    // Build results maintaining database sort order
    listingsWithEnhancements = rankedListingIds
      .map((listingId) => {
        const listing = listingsMap.get(listingId);
        if (!listing) return null;

        const resultData = resultsMap.get(listingId);
        // Use the dynamically calculated composite score from the query
        const compositeScore = scoresMap.get(listingId) || 0;

        return {
          listing,
          scrapeId: id,
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
  } else {
    // Default: fetch listings sorted by foundAt (database-level)
    const scrapeListings = await prisma.scrapeListing.findMany({
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

    listingsWithEnhancements = scrapeListings;
  }

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

      {/* Enhancement polling */}
      <EnhancementPolling
        enhancementId={activeEnhancementIds[0] || null}
        scrapeId={scrape.id}
      />

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

          {/* Enhancement Selector - only show if scrape is completed */}
          {scrape.status === "completed" && (
            <EnhancementSelector
              scrapeId={scrape.id}
              allEnhancements={allEnhancements.map((e) => ({
                id: e.id,
                query: e.query,
                status: e.status,
                error: e.error,
                processedCount: e.processedCount,
                totalCount: e.totalCount,
                createdAt: e.createdAt.toISOString(),
                columns: e.columns.map((c) => ({
                  name: c.name,
                  type: c.type,
                  description: c.description,
                })),
              }))}
              activeEnhancementIds={activeEnhancementIds}
            />
          )}
        </div>

        {/* Column Weights - show when enhancements are active */}
        {scrape.status === "completed" &&
          activeEnhancementIds.length > 0 &&
          enhancementColumns.length > 0 && (
            <ColumnWeights
              key={activeEnhancementIds.join(",")}
              enhancementIds={activeEnhancementIds}
              columns={enhancementColumns.map((c) => ({
                id: c.id,
                name: c.name,
                type: c.type,
                description: c.description,
                weight: c.weight,
                inverted: false, // Legacy field, not used
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
            enhancementColumns={enhancementColumns}
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

                  {/* Show listing count during scraping */}
                  {totalListings > 0 && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {totalListings} listings found so far
                    </p>
                  )}
                </div>

                {/* Enhancement status during scraping */}
                {allEnhancements.length > 0 && (
                  <div className="w-full max-w-md space-y-3 mt-4">
                    {allEnhancements.map((enhancement) => (
                      <div
                        key={enhancement.id}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            AI Analysis
                          </p>
                          <p className="text-xs text-gray-500">
                            {enhancement.status === "pending" &&
                              "Waiting for listings..."}
                            {enhancement.status === "processing" &&
                              enhancement.totalCount > 0 &&
                              `${Math.round(
                                (enhancement.processedCount /
                                  enhancement.totalCount) *
                                  100,
                              )}% complete`}
                          </p>
                        </div>
                        <Badge
                          className={`${getStatusColor(
                            enhancement.status,
                          )} text-white text-xs`}
                        >
                          {enhancement.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                )}
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
