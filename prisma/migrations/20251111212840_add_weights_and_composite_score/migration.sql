-- AlterTable
ALTER TABLE "EnhancementColumn" ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL DEFAULT 5.0;

-- AlterTable
ALTER TABLE "EnhancementResult" ADD COLUMN     "compositeScore" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "EnhancementResult_enhancementId_compositeScore_idx" ON "EnhancementResult"("enhancementId", "compositeScore");
