/*
  Warnings:

  - You are about to drop the column `mainImageUrl` on the `Post` table. All the data in the column will be lost.
  - Added the required column `excerpt` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "mainImageUrl",
ADD COLUMN     "excerpt" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ALTER COLUMN "content" SET DATA TYPE TEXT;
