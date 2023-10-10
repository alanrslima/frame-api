// import { CryptoAdapter } from '@/infra/cryptography'
// import env from '@/main/config/env'
// import { type Middleware } from '@/presentation/contracts'
import { AuthMiddleware } from '@/presentation/middlewares/auth-middleware'

import { type Middleware } from '@/presentation/contracts/middleware'
import { JwtAdapter } from '@/infra/cryptography/jwt-adapter'
import env from '@/main/config/env'

export const authMiddlewareFactory = (role?: string): Middleware => {
  // const cryptoAdapter = new CryptoAdapter(env.jwtSecret)
  // return new AuthMiddleware(cryptoAdapter, role)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  return new AuthMiddleware(jwtAdapter, role)
}
