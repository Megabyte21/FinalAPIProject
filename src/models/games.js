import { v4 as uuid } from 'uuid'
import db from '../utils/db'

const games = []

export const getGames = async () => db.games.findMany()

export const getGame = async (id) =>
  db.games.findUnique({ where: { gameID: id } })

export const createGame = async (name, description, rating) =>
  db.games.create({ data: { name, description, rating } })

export const updateGame = async (id, gameData) => {
  const game = await getGame(id)
  if (game) {
    return db.games.update({
      where: { gameID: id },
      data: { ...game, ...gameData, updatedAt: new Date() },
    })
  }
  return null
}

export const deleteGame = async (id) =>
  db.games.delete({ where: { gameID: id } })
