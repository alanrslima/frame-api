import { type Router } from 'express'
import { adaptRoute } from '../adapters'
import { createPostControllerFactory } from '../factories/controllers/create-post-controller-factory'
import { auth } from '../middlewares/auth'

export default (router: Router): void => {
  router.post('/posts', auth, adaptRoute(createPostControllerFactory()))
}
