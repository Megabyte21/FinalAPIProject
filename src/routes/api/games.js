import { Router } from 'express'

import {
  getGame,
  getGames,
  createGame,
  updateGame,
  deleteGame,
} from '../../models/games'

const router = Router()

router.get('/', async (req, res) => {
  const games = await getGames()
  res.send(games)
})

router.get('/:id', async (req, res) => {
  const game = await getGame(req.params.id)
  if (game) {
    res.send(game)
  } else {
    res.status(404).send({ msg: 'Game Not Found' })
  }
})

router.post('/', async (req, res) => {
  const gameName = req.body.name
  const gameDescription = req.body.description
  const gameRating = req.body.rating
  const gamePrice = req.body.price
  const gamecoverArt = req.body.coverArt
  if (gameName) {
    const game = await createGame(
      gameName,
      gameDescription,
      gameRating,
      gamePrice,
      gamecoverArt,
    )
    res.send(game)
  } else {
    res.status(400).send({ msg: 'Game name is required' })
  }
})

router.put('/:id', async (req, res) => {
  const game = await updateGame(req.params.id, req.body)
  if (game) {
    res.send(game)
  } else {
    res.status(404).send({ msg: 'Game Not Found' })
  }
})

router.delete('/:id', async (req, res) => {
  const deleted = await deleteGame(req.params.id)
  if (deleted) {
    res.send({ msg: `Game ${req.params.id} Deleted` })
  } else {
    res.status(404).send({ msg: 'Game not found' })
  }
})

export default router
