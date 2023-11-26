/*
  Warnings:

  - The primary key for the `Anime` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `animeId` on the `Anime` table. All the data in the column will be lost.
  - The primary key for the `Games` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `gameId` on the `Games` table. All the data in the column will be lost.
  - The required column `animeID` was added to the `Anime` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `gameID` was added to the `Games` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Anime" DROP CONSTRAINT "Anime_pkey",
DROP COLUMN "animeId",
ADD COLUMN     "animeID" TEXT NOT NULL,
ADD CONSTRAINT "Anime_pkey" PRIMARY KEY ("animeID");

-- AlterTable
ALTER TABLE "Games" DROP CONSTRAINT "Games_pkey",
DROP COLUMN "gameId",
ADD COLUMN     "gameID" TEXT NOT NULL,
ADD CONSTRAINT "Games_pkey" PRIMARY KEY ("gameID");
