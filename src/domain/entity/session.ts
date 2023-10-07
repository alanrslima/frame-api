import { InvalidCredentialsError } from '../error/invalid-credentials-error'
import { type User } from './user'

export class Session {
  private token: string

  constructor (private readonly user: User, private readonly password: string) {}

  async create (): Promise<void> {
    const validPassword = await this.user.validatePassword(this.password)
    if (!validPassword) { throw new InvalidCredentialsError() }
    this.generateToken()
  }

  private generateToken (): void {
    this.token = '221312321'
  }

  getToken (): string {
    return this.token
  }
}
