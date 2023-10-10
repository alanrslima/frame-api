import { type UserRepository } from '@/application/contract/repository/user-repository'
import { ResourceNotFoundError } from '@/application/error/resource-not-found-error'
import { type User } from '@/domain/entity/user'

export class UserMemoryRepository implements UserRepository {
  readonly users: User[]

  constructor (users?: User[]) {
    this.users = users ?? []
  }

  async some (id: string): Promise<boolean> {
    return this.users.some(user => user.id === id)
  }

  async getByEmail (email: string): Promise<User> {
    const user = this.users.find(user => user.email.getValue() === email)
    if (!user) { throw new ResourceNotFoundError() }
    return user
  }

  async get (id: string): Promise<User> {
    const user = this.users.find(user => user.id === id)
    if (!user) { throw new ResourceNotFoundError() }
    return user
  }

  async save (user: User): Promise<void> {
    this.users.push(user)
  }
}
