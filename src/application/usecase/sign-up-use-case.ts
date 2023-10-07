import { User } from '@/domain/entity/user'
import { type UserRepository } from '../contract/repository/user-repository'
import { UserAlreadyExistsError } from '../error/user-alredy-exists-error'

export class SignUpUseCase {
  constructor (private readonly userRepository: UserRepository) {}

  async execute (input: Input): Promise<Output> {
    const userExists = await this.userRepository.some(input.email)
    if (userExists) { throw new UserAlreadyExistsError() }
    const user = await User.create({ email: input.email, password: input.password, name: input.name })
    await this.userRepository.save({ email: user.email.getValue(), name: user.name.getValue(), password: user.password.getValue() })
  }
}

interface Input {
  email: string
  name: string
  password: string
}

type Output = any
