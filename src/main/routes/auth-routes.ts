// import { adaptRoute } from '@/main/adapters'
// import { loginControllerFactory } from '@/main/factories/controllers'

import { type Router } from 'express'
import { adaptRoute } from '../adapters'
// import { auth } from '../middlewares'
// import { userMeControllerFactory } from '../factories/controllers/user-me-controller-factory'

export default (router: Router): void => {
  // router.post('/auth/login', adaptRoute(loginControllerFactory()))
  // router.get('/auth/me', auth, adaptRoute(userMeControllerFactory()))
  router.get('/test', adaptRoute)
}
