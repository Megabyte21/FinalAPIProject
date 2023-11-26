import { Router } from 'express'
import basicAuth from 'express-basic-auth'

import animes from './animes'
import games from './games'
const router = Router()

router.use(
  basicAuth({
    users: { [process.env.ADMIN_USER]: process.env.ADMIN_PASSWORD },
  }),
)

router.get('/', (req, res) => {
  res.send({ msg: 'Inside API enpoints' })
})

router.use('/animes', animes)
router.use('/games', games)

export default router
