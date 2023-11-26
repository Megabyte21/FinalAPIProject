-- CreateTable
CREATE TABLE "Anime" (
    "animeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("animeId")
);

-- CreateTable
CREATE TABLE "Games" (
    "gameId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" TEXT NOT NULL,

    CONSTRAINT "Games_pkey" PRIMARY KEY ("gameId")
);
