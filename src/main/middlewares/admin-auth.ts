import { adaptMiddleware } from '@/main/adapters'
import { authMiddlewareFactory } from '@/main/factories'

export const adminAuth = adaptMiddleware(authMiddlewareFactory('admin'))
