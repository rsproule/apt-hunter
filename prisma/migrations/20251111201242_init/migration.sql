-- CreateTable
CREATE TABLE "Scrape" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT,
    "searchType" TEXT NOT NULL,
    "searchQuery" JSONB NOT NULL,
    "apifyRunId" TEXT NOT NULL,
    "taskId" TEXT,
    "status" TEXT NOT NULL,
    "error" TEXT,
    "completedAt" TIMESTAMP(3),
    "durationMs" INTEGER,
    "listingsCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Scrape_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Listing" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "zpid" TEXT NOT NULL,
    "detailUrl" TEXT NOT NULL,
    "imgSrc" TEXT,
    "photos" TEXT[],
    "hasImage" BOOLEAN NOT NULL DEFAULT false,
    "has3DModel" BOOLEAN NOT NULL DEFAULT false,
    "hasVideo" BOOLEAN NOT NULL DEFAULT false,
    "statusType" TEXT NOT NULL,
    "statusText" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "priceFormatted" TEXT,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "address" TEXT NOT NULL,
    "addressStreet" TEXT,
    "addressCity" TEXT,
    "addressState" TEXT,
    "addressZipcode" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "beds" INTEGER,
    "baths" DOUBLE PRECISION,
    "area" INTEGER,
    "homeType" TEXT,
    "availabilityDate" TIMESTAMP(3),
    "scrapedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "brokerName" TEXT,
    "zestimate" INTEGER,
    "rentZestimate" INTEGER,
    "isFeaturedListing" BOOLEAN NOT NULL DEFAULT false,
    "rawData" JSONB NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScrapeListing" (
    "scrapeId" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "foundAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScrapeListing_pkey" PRIMARY KEY ("scrapeId","listingId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Scrape_apifyRunId_key" ON "Scrape"("apifyRunId");

-- CreateIndex
CREATE INDEX "Scrape_userId_idx" ON "Scrape"("userId");

-- CreateIndex
CREATE INDEX "Scrape_createdAt_idx" ON "Scrape"("createdAt");

-- CreateIndex
CREATE INDEX "Scrape_apifyRunId_idx" ON "Scrape"("apifyRunId");

-- CreateIndex
CREATE INDEX "Scrape_status_idx" ON "Scrape"("status");

-- CreateIndex
CREATE UNIQUE INDEX "Listing_zpid_key" ON "Listing"("zpid");

-- CreateIndex
CREATE INDEX "Listing_zpid_idx" ON "Listing"("zpid");

-- CreateIndex
CREATE INDEX "Listing_addressZipcode_idx" ON "Listing"("addressZipcode");

-- CreateIndex
CREATE INDEX "Listing_addressCity_addressState_idx" ON "Listing"("addressCity", "addressState");

-- CreateIndex
CREATE INDEX "Listing_price_idx" ON "Listing"("price");

-- CreateIndex
CREATE INDEX "Listing_beds_baths_idx" ON "Listing"("beds", "baths");

-- CreateIndex
CREATE INDEX "Listing_statusType_idx" ON "Listing"("statusType");

-- CreateIndex
CREATE INDEX "Listing_scrapedAt_idx" ON "Listing"("scrapedAt");

-- CreateIndex
CREATE INDEX "ScrapeListing_scrapeId_idx" ON "ScrapeListing"("scrapeId");

-- CreateIndex
CREATE INDEX "ScrapeListing_listingId_idx" ON "ScrapeListing"("listingId");

-- AddForeignKey
ALTER TABLE "ScrapeListing" ADD CONSTRAINT "ScrapeListing_scrapeId_fkey" FOREIGN KEY ("scrapeId") REFERENCES "Scrape"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScrapeListing" ADD CONSTRAINT "ScrapeListing_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;
