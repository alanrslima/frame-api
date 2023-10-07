import { adaptMiddleware } from '@/main/adapters'
import { authMiddlewareFactory } from '@/main/factories'

export const auth = adaptMiddleware(authMiddlewareFactory())
