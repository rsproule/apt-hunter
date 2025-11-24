-- SearchConfiguration.userId already exists, no changes needed

-- CreateTable
CREATE TABLE "SentNotification" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "configurationId" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "compositeScore" DOUBLE PRECISION NOT NULL,
    "rank" INTEGER NOT NULL,

    CONSTRAINT "SentNotification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SentNotification_userId_idx" ON "SentNotification"("userId");

-- CreateIndex
CREATE INDEX "SentNotification_configurationId_idx" ON "SentNotification"("configurationId");

-- CreateIndex
CREATE INDEX "SentNotification_listingId_idx" ON "SentNotification"("listingId");

-- CreateIndex
CREATE INDEX "SentNotification_createdAt_idx" ON "SentNotification"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "SentNotification_configurationId_listingId_key" ON "SentNotification"("configurationId", "listingId");

-- AddForeignKey
ALTER TABLE "SentNotification" ADD CONSTRAINT "SentNotification_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

