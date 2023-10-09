import { type UserRepository } from '../contract/repository/user-repository'
import { Session } from '@/domain/entity/session'

export class SignInUseCase {
  constructor (private readonly userRepository: UserRepository) {}

  async execute (input: Input): Promise<Output> {
    const user = await this.userRepository.getByEmail(input.email)
    const session = new Session(user, input.password)
    await session.create()
    return { token: session.getToken() }
  }
}

interface Input {
  email: string
  password: string
}

interface Output {
  token: string
}
