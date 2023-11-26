import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send({ msg: 'Get all Animes' })
})

router.get('/:id', (req, res) => {
  res.send({ msg: `Getting Anime ${req.params.id}` })
})

router.post('/', (req, res) => {
  res.send({ msg: 'Creating a New Anime' })
})

router.put('/:id', (req, res) => {
  res.send({ msg: `Updataing Anime ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
  res.send({ msg: `Deleting Anime ${req.params.id}` })
})

export default router
