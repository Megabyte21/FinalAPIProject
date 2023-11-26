import { nanoid } from 'nanoid'

const animes = []

export const getAnimes = () => animes

export const getAnime = (id) => {
  return animes.find((anime) => anime.id === id)
}

export const createAnime = (anime) => {
  const id = nanoid()
  animes.push({ id, ...anime })
}

export const updateAnime = (id, anime) => {
  const databaseAnime = getAnime(id)
  if (databaseAnime) {
    const animeIndex = animes.findIndex((a) => a.id === id)
    animes[animeIndex] = { id, ...anime }
  }
}

export const deleteAnime = (id, anime) => {
  const animeIndex = animes.findIndex((a) => a.id === id)
  if (animeIndex != -1) {
    animes.splice(animeIndex, 1)
  }
}
