import { Router } from 'express'
import basicAuth from 'express-basic-auth'

import animes from './animes'
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

export default router
