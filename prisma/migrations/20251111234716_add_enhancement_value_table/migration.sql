-- CreateTable
CREATE TABLE "EnhancementValue" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resultId" TEXT NOT NULL,
    "columnId" TEXT NOT NULL,
    "enhancementId" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "normalizedValue" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "EnhancementValue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "EnhancementValue_enhancementId_columnId_normalizedValue_idx" ON "EnhancementValue"("enhancementId", "columnId", "normalizedValue");

-- CreateIndex
CREATE INDEX "EnhancementValue_listingId_columnId_idx" ON "EnhancementValue"("listingId", "columnId");

-- CreateIndex
CREATE UNIQUE INDEX "EnhancementValue_resultId_columnId_key" ON "EnhancementValue"("resultId", "columnId");

-- AddForeignKey
ALTER TABLE "EnhancementValue" ADD CONSTRAINT "EnhancementValue_resultId_fkey" FOREIGN KEY ("resultId") REFERENCES "EnhancementResult"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnhancementValue" ADD CONSTRAINT "EnhancementValue_columnId_fkey" FOREIGN KEY ("columnId") REFERENCES "EnhancementColumn"("id") ON DELETE CASCADE ON UPDATE CASCADE;
