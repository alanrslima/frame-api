import { adaptMiddleware } from '@/main/adapters'
import { authMiddlewareFactory } from '@/main/factories/middlewares/auth-middleware-factory'

export const auth = adaptMiddleware(authMiddlewareFactory())
