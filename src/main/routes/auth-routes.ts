// import { adaptRoute } from '@/main/adapters'
// import { loginControllerFactory } from '@/main/factories/controllers'

import { type Router } from 'express'
import { adaptRoute } from '../adapters'
import { signUpControllerFactory } from '../factories/controllers/sign-up-controller-factory'
import { signInControllerFactory } from '../factories/controllers/sign-in-controller-factory'
// import { auth } from '../middlewares'
// import { userMeControllerFactory } from '../factories/controllers/user-me-controller-factory'

export default (router: Router): void => {
  router.post('/auth/sign-up', adaptRoute(signUpControllerFactory()))
  router.post('/auth/sign-in', adaptRoute(signInControllerFactory()))
}
