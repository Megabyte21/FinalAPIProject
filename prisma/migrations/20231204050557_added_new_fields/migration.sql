/*
  Warnings:

  - Added the required column `coverArt` to the `Anime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coverArt` to the `Games` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Games` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Anime" ADD COLUMN     "coverArt" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Games" ADD COLUMN     "coverArt" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;
