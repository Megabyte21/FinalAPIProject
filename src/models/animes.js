import { v4 as uuid } from 'uuid'

const animes = []

export const getAnimes = () => animes

export const getAnime = (id) => {
  return animes.find((anime) => anime.id === id)
}

export const createAnime = (anime) => {
  const id = uuid()
  animes.push({ id, ...anime })
  return getAnime(id)
}

export const updateAnime = (id, anime) => {
  const databaseAnime = getAnime(id)
  if (databaseAnime) {
    const animeIndex = animes.findIndex((a) => a.id === id)
    animes[animeIndex] = { id, ...anime }
  }
  return getAnime(id)
}

export const deleteAnime = (id, anime) => {
  const animeIndex = animes.findIndex((a) => a.id === id)
  if (animeIndex != -1) {
    animes.splice(animeIndex, 1)
    return true
  }
  return false
}
