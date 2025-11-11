-- CreateTable
CREATE TABLE "Enhancement" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "scrapeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "query" TEXT NOT NULL,
    "taskId" TEXT,
    "status" TEXT NOT NULL,
    "error" TEXT,
    "completedAt" TIMESTAMP(3),
    "processedCount" INTEGER NOT NULL DEFAULT 0,
    "totalCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Enhancement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnhancementColumn" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "enhancementId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "EnhancementColumn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnhancementResult" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "enhancementId" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "values" JSONB NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "error" TEXT,

    CONSTRAINT "EnhancementResult_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Enhancement_scrapeId_idx" ON "Enhancement"("scrapeId");

-- CreateIndex
CREATE INDEX "Enhancement_userId_idx" ON "Enhancement"("userId");

-- CreateIndex
CREATE INDEX "Enhancement_status_idx" ON "Enhancement"("status");

-- CreateIndex
CREATE INDEX "Enhancement_createdAt_idx" ON "Enhancement"("createdAt");

-- CreateIndex
CREATE INDEX "EnhancementColumn_enhancementId_idx" ON "EnhancementColumn"("enhancementId");

-- CreateIndex
CREATE INDEX "EnhancementResult_enhancementId_idx" ON "EnhancementResult"("enhancementId");

-- CreateIndex
CREATE INDEX "EnhancementResult_listingId_idx" ON "EnhancementResult"("listingId");

-- CreateIndex
CREATE INDEX "EnhancementResult_status_idx" ON "EnhancementResult"("status");

-- CreateIndex
CREATE UNIQUE INDEX "EnhancementResult_enhancementId_listingId_key" ON "EnhancementResult"("enhancementId", "listingId");

-- AddForeignKey
ALTER TABLE "Enhancement" ADD CONSTRAINT "Enhancement_scrapeId_fkey" FOREIGN KEY ("scrapeId") REFERENCES "Scrape"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnhancementColumn" ADD CONSTRAINT "EnhancementColumn_enhancementId_fkey" FOREIGN KEY ("enhancementId") REFERENCES "Enhancement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnhancementResult" ADD CONSTRAINT "EnhancementResult_enhancementId_fkey" FOREIGN KEY ("enhancementId") REFERENCES "Enhancement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnhancementResult" ADD CONSTRAINT "EnhancementResult_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;
