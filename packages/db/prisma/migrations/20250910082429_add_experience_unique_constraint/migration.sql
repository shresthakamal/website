/*
  Warnings:

  - A unique constraint covering the columns `[title,company]` on the table `experiences` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "experiences_title_company_key" ON "public"."experiences"("title", "company");
