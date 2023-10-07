// import { CryptoAdapter } from '@/infra/cryptography'
// import env from '@/main/config/env'
// import { type Middleware } from '@/presentation/contracts'
// import { AuthMiddleware } from '@/presentation/middlewares'

import { type Middleware } from '@/presentation/contracts/middleware'

export const authMiddlewareFactory = (role?: string): Middleware => {
  // const cryptoAdapter = new CryptoAdapter(env.jwtSecret)
  // return new AuthMiddleware(cryptoAdapter, role)
  return {} as any
}
