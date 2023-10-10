import Email from './email'
import Name from './name'
import Password from './password'
import { randomUUID } from 'crypto'

export class User {
  readonly id: string
  readonly email: Email
  readonly name: Name
  readonly resume?: string
  readonly password: Password
  readonly createdAt: Date

  private constructor (values: {
    id: string
    email: Email
    resume?: string
    password: Password
    name: Name
  }) {
    this.id = values.id
    this.email = values.email
    this.password = values.password
    this.name = values.name
    this.resume = values.resume
    this.createdAt = new Date()
  }

  static async create (values: { email: string, password: string, name: string, resume?: string }): Promise<User> {
    return new User({
      id: randomUUID(),
      email: new Email(values.email),
      password: await Password.create(values.password, 'salt'),
      name: new Name(values.name),
      resume: values.resume
    })
  }

  static buildExistingUser (values: { id: string, email: string, name: string, hashPassword: string, resume?: string }): User {
    return new User({
      id: values.id,
      email: new Email(values.email),
      name: new Name(values.name),
      password: new Password(values.hashPassword, 'salt'),
      resume: values.resume
    })
  }

  async validatePassword (password: string): Promise<boolean> {
    return await this.password.validate(password)
  }
}
