import { type Middleware } from '@/presentation/contracts/middleware'
// import { forbidden, ok, serverError } from '@/presentation/helpers'
// import { AccessDeniedError } from '@/presentation/errors'
import { type HttpResponse } from '@/presentation/contracts/http-response'
import { ok } from '../helpers/http-helper'
import { type Decrypter } from '@/application/contract/cryptography/decrypter'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly role?: string
  ) {}

  async handle (request: Request): Promise<HttpResponse<any>> {
    // try {
    const { authorization } = request

    if (!authorization) {
      console.log('ERRO DE AUTH')
    }

    // const [, token] = authorization.split(' ')
    // const value = await this.decrypter.decrypt(token)
    // console.log('value', value)

    // if (accessToken) {
    return ok({ userId: '6ae77e33-162e-4f26-ad85-2d26c0a71a47' })
    // const account = await this.loadAccountByToken.load(accessToken, this.role)
    // if (account) {
    //   return ok({ accountId: account.id })
    // }
    // }

    // return

    // return forbidden(new AccessDeniedError())
    // return serverError(error)
    // }
  }
}

interface Request {
  authorization: string
}
