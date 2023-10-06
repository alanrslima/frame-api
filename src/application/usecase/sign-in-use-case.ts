import { User } from '@/domain/entity/user'
import { type UserRepository } from '../contract/repository/user-repository'

export class SignInUseCase {
  constructor (private readonly userRepository: UserRepository) {}

  async execute (input: Input): Promise<Output> {
    const userData = await this.userRepository.get(input.email)
    if (!userData) {
      throw new Error('')
    }

    const user = User.buildExistingUser({
      email: userData.email,
      hashPassword: userData.password,
      name: userData.name
    })

    const passwordIsValid = await user.validatePassword(input.password)
    if (!passwordIsValid) {
      throw new Error('')
    }

    await this.userRepository.save({
      email: user.email.getValue(),
      name: user.name.getValue(),
      password: user.password.getValue()
    })
  }
}

interface Input {
  email: string
  password: string
}

type Output = any
