import { Router } from 'express'

import {
  getAnime,
  getAnimes,
  createAnime,
  updateAnime,
  deleteAnime,
} from '../../models/animes'

const router = Router()

router.get('/', async (req, res) => {
  const animes = await getAnimes()
  res.send(animes)
})

router.get('/:id', async (req, res) => {
  const anime = await getAnime(req.params.id)
  if (anime) {
    res.send(anime)
  } else {
    res.status(404).send({ msg: 'Anime Not Found' })
  }
})

router.post('/', async (req, res) => {
  const animeName = req.body.name
  const animeDescription = req.body.description
  if (animeName) {
    const anime = await createAnime(animeName, animeDescription)
    res.send(anime)
  } else {
    res.status(400).send({ msg: 'Anime name is required' })
  }
})

router.put('/:id', async (req, res) => {
  const updatedAnime = await updateAnime(req.params.id, req.body)
  if (updatedAnime) {
    res.send(updatedAnime)
  } else {
    res.status(404).send({ msg: 'Anime not found' })
  }
})

router.delete('/:id', async (req, res) => {
  const deleted = await deleteAnime(req.params.id)
  if (deleted) {
    res.send({ msg: `Anime ${req.params.id} Deleted` })
  } else {
    res.status(404).send({ msg: 'Anime not found' })
  }
})

export default router
