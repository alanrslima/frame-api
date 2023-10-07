import { type Router } from 'express'
import { adaptRoute } from '../adapters'
import { createPostControllerFactory } from '../factories/controllers/create-post-controller-factory'

export default (router: Router): void => {
  router.post('/posts', adaptRoute(createPostControllerFactory()))
}
