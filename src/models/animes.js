import { v4 as uuid } from 'uuid'
import db from '../utils/db'

const animes = []

export const getAnimes = async () => db.anime.findMany()

export const getAnime = (id) => {
  return db.anime.findUnique({ where: { animeID: id } })
}

export const createAnime = async (name, description, coverArt) =>
  db.anime.create({ data: { name, description, coverArt } })

export const updateAnime = async (id, animeData) => {
  const anime = await getAnime(id)
  if (anime) {
    return db.anime.update({
      where: { animeID: id },
      data: { ...anime, ...animeData, updatedAt: new Date() },
    })
  }
  return null
}

export const deleteAnime = async (id) =>
  db.anime.delete({ where: { animeID: id } })
