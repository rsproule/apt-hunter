import ColumnWeights from "@/app/search/[id]/ColumnWeights";
import EnhancementChat from "@/app/search/[id]/EnhancementChat";
import EnhancementPolling from "@/app/search/[id]/EnhancementPolling";
import ListingsTable from "@/app/search/[id]/ListingsTable";
import SaveQueryButton from "@/app/search/[id]/SaveQueryButton";
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

  // Get enhancement query and column weights from active enhancements
  const enhancementQuery = activeEnhancements[0]?.query;
  const columnWeightsMap: Record<string, number> = {};
  for (const enhancement of activeEnhancements) {
    for (const column of enhancement.columns) {
      columnWeightsMap[column.name] = column.weight;
    }
  }

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
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">{displayName}</h1>
            <Badge className={`${getStatusColor(scrape.status)} text-white`}>
              {scrape.status}
            </Badge>
            {scrape.status === "completed" &&
              activeEnhancementIds.length > 0 && (
                <SaveQueryButton
                  scrapeId={scrape.id}
                  searchType={scrape.searchType}
                  searchQuery={searchQuery}
                  enhancementQuery={enhancementQuery}
                  columnWeights={columnWeightsMap}
                />
              )}
          </div>
          <p className="text-gray-600">
            {scrape.listingsCount} listings found •{" "}
            {new Date(scrape.createdAt).toLocaleDateString()} at{" "}
            {new Date(scrape.createdAt).toLocaleTimeString()}
          </p>
        </div>

        {/* Enhancement Chat - only show if scrape is completed */}
        {scrape.status === "completed" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <EnhancementChat
                scrapeId={scrape.id}
                activeEnhancementIds={activeEnhancementIds}
                enhancements={allEnhancements.map((e) => ({
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
              />
            </div>

            {/* Column Weights - show when enhancements are active */}
            {activeEnhancementIds.length > 0 &&
              enhancementColumns.length > 0 && (
                <div className="lg:col-span-1">
                  <ColumnWeights
                    key={activeEnhancementIds.join(",")}
                    enhancementIds={activeEnhancementIds}
                    columns={enhancementColumns.map((c) => ({
                      id: c.id,
                      name: c.name,
                      type: c.type,
                      description: c.description,
                      weight: c.weight,
                    }))}
                  />
                </div>
              )}
          </div>
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
