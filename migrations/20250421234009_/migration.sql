/*
  Warnings:

  - A unique constraint covering the columns `[eventId]` on the table `SurveyLinks` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Events" ADD COLUMN     "generatedLink" TEXT;

-- AlterTable
ALTER TABLE "SurveyLinks" ADD COLUMN     "eventId" INTEGER,
ADD COLUMN     "generatedLink" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "SurveyLinks_eventId_key" ON "SurveyLinks"("eventId");

-- AddForeignKey
ALTER TABLE "SurveyLinks" ADD CONSTRAINT "SurveyLinks_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Events"("id") ON DELETE SET NULL ON UPDATE CASCADE;
