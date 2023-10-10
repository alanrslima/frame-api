import { type Encrypter } from '../contract/cryptography/encrypter'
import { type UserRepository } from '../contract/repository/user-repository'
import { Session } from '@/domain/entity/session'

export class SignInUseCase {
  constructor (private readonly userRepository: UserRepository, private readonly encrypter: Encrypter) {}

  async execute (input: Input): Promise<Output> {
    const user = await this.userRepository.getByEmail(input.email)
    const session = await Session.create({ user, password: input.password, encrypter: this.encrypter })
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
