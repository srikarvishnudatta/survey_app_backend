-- CreateTable
CREATE TABLE "SurveyResponses" (
    "id" SERIAL NOT NULL,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "feedback" TEXT NOT NULL,
    "linkId" INTEGER,

    CONSTRAINT "SurveyResponses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SurveyResponses_linkId_key" ON "SurveyResponses"("linkId");

-- AddForeignKey
ALTER TABLE "SurveyResponses" ADD CONSTRAINT "SurveyResponses_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "SurveyLinks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
