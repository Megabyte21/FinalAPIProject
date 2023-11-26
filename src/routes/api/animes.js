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
  if (anime) {
    res.send(anime)
  }
  res.status(404).send({ msg: 'Anime Not Found' })
})

router.post('/', (req, res) => {
  const newAnime = createAnime(req.body)
  if (newAnime) {
    res.status(201).send(newAnime)
  }
  res.status(400).send({ msg: 'Bad request' })
})

router.put('/:id', (req, res) => {
  const updatedAnime = updateAnime(req.params.id, req.body)
  if (updatedAnime) {
    res.send(updatedAnime)
  }
  res.status(404).send({ msg: 'Anime not found' })
})

router.delete('/:id', (req, res) => {
  const deleted = deleteAnime(req.params.id)
  if (deleted) {
    res.send({ msg: `Anime ${req.params.id} Deleted` })
  }
  res.status(404).send({ msg: 'Anime not found' })
})

export default router
