/*
  Warnings:

  - You are about to drop the column `inverted` on the `EnhancementColumn` table. All the data in the column will be lost.
  - You are about to alter the column `weight` on the `EnhancementColumn` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "EnhancementColumn" DROP COLUMN "inverted",
ALTER COLUMN "weight" SET DEFAULT 5,
ALTER COLUMN "weight" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Scrape" ADD COLUMN     "savedQueryId" TEXT;

-- CreateIndex
CREATE INDEX "Scrape_savedQueryId_idx" ON "Scrape"("savedQueryId");

-- AddForeignKey
ALTER TABLE "Scrape" ADD CONSTRAINT "Scrape_savedQueryId_fkey" FOREIGN KEY ("savedQueryId") REFERENCES "SavedQuery"("id") ON DELETE SET NULL ON UPDATE CASCADE;
