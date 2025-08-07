-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "backgroundImage" TEXT,
ADD COLUMN     "mainImage" TEXT,
ALTER COLUMN "description" DROP NOT NULL;
