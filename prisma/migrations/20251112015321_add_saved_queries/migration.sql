-- CreateTable
CREATE TABLE "SavedQuery" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "searchType" TEXT NOT NULL,
    "searchQuery" JSONB NOT NULL,
    "enhancementQuery" TEXT NOT NULL,
    "columnWeights" JSONB NOT NULL DEFAULT '{}',
    "lastRunAt" TIMESTAMP(3),
    "lastScrapeId" TEXT,

    CONSTRAINT "SavedQuery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserListingResponse" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "savedQueryId" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "notes" TEXT,

    CONSTRAINT "UserListingResponse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SavedQuery_userId_idx" ON "SavedQuery"("userId");

-- CreateIndex
CREATE INDEX "SavedQuery_createdAt_idx" ON "SavedQuery"("createdAt");

-- CreateIndex
CREATE INDEX "SavedQuery_lastRunAt_idx" ON "SavedQuery"("lastRunAt");

-- CreateIndex
CREATE INDEX "UserListingResponse_userId_idx" ON "UserListingResponse"("userId");

-- CreateIndex
CREATE INDEX "UserListingResponse_savedQueryId_idx" ON "UserListingResponse"("savedQueryId");

-- CreateIndex
CREATE INDEX "UserListingResponse_listingId_idx" ON "UserListingResponse"("listingId");

-- CreateIndex
CREATE INDEX "UserListingResponse_savedQueryId_response_idx" ON "UserListingResponse"("savedQueryId", "response");

-- CreateIndex
CREATE UNIQUE INDEX "UserListingResponse_savedQueryId_listingId_key" ON "UserListingResponse"("savedQueryId", "listingId");

-- AddForeignKey
ALTER TABLE "UserListingResponse" ADD CONSTRAINT "UserListingResponse_savedQueryId_fkey" FOREIGN KEY ("savedQueryId") REFERENCES "SavedQuery"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserListingResponse" ADD CONSTRAINT "UserListingResponse_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;
