-- AlterTable
ALTER TABLE "public"."comments" ALTER COLUMN "authorEmail" DROP NOT NULL,
ALTER COLUMN "isApproved" SET DEFAULT true;
