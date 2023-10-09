import Email from './email'
import Name from './name'
import Password from './password'
import { randomUUID } from 'crypto'

export class User {
  readonly id: string
  readonly email: Email
  readonly name: Name
  readonly password: Password

  constructor (values: {
    id: string
    email: Email
    password: Password
    name: Name
  }) {
    this.id = values.id
    this.email = values.email
    this.password = values.password
    this.name = values.name
  }

  static async create (values: { email: string, password: string, name: string }): Promise<User> {
    return new User({
      id: randomUUID(),
      email: new Email(values.email),
      password: await Password.create(values.password, 'salt'),
      name: new Name(values.name)
    })
  }

  static buildExistingUser (values: { id: string, email: string, name: string, hashPassword: string }): User {
    return new User({
      id: values.id,
      email: new Email(values.email),
      name: new Name(values.name),
      password: new Password(values.hashPassword, 'salt')
    })
  }

  async validatePassword (password: string): Promise<boolean> {
    return await this.password.validate(password)
  }
}
