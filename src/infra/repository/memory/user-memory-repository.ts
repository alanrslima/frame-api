import { type UserModel } from '@/application/contract/model/user-model'
import { type UserRepository } from '@/application/contract/repository/user-repository'

export class UserMemoryRepository implements UserRepository {
  readonly users: UserModel[]

  constructor (users?: UserModel[]) {
    this.users = users ?? []
  }

  async some (id: string): Promise<boolean> {
    return this.users.some(user => user.id === id)
  }

  async getByEmail (email: string): Promise<UserModel> {
    const user = this.users.find(user => user.email === email)
    if (!user) { throw new Error('User not found') }
    return user
  }

  async get (id: string): Promise<UserModel> {
    const user = this.users.find(user => user.id === id)
    if (!user) { throw new Error('User not found') }
    return user
  }

  async save (user: UserModel): Promise<void> {
    this.users.push(user)
  }
}
