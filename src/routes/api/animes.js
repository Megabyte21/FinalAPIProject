import { Router } from 'express'

import {
  getAnime,
  getAnimes,
  createAnime,
  updateAnime,
  deleteAnime,
} from '../../models/animes'

const router = Router()

router.get('/', (req, res) => {
  const animes = getAnimes()
  res.send(animes)
})

router.get('/:id', (req, res) => {
  const anime = getAnime(req.params.id)
  res.send(anime)
})

router.post('/', (req, res) => {
  const newAnime = createAnime(req.body)
  res.send(newAnime)
})

router.put('/:id', (req, res) => {
  updateAnime(req.params.id, req.body)
  res.send({ msg: `Anime ${req.params.id} Updated` })
})

router.delete('/:id', (req, res) => {
  deleteAnime(req.params.id)
  res.send({ msg: `Anime ${req.params.id} Deleted` })
})

export default router
