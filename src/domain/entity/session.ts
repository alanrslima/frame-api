import { type Encrypter } from '@/application/contract/cryptography/encrypter'
import { InvalidCredentialsError } from '../error/invalid-credentials-error'
import { type User } from './user'

export class Session {
  private readonly token: string

  private constructor (values: { token: string }) {
    this.token = values.token
  }

  static async create (values: { user: User, password: string, encrypter: Encrypter }): Promise<Session> {
    const validPassword = await values.user.validatePassword(values.password)
    if (!validPassword) { throw new InvalidCredentialsError() }
    const token = await values.encrypter.encrypt(values.user.id)
    return new Session({ token })
  }

  getToken (): string {
    return this.token
  }
}
