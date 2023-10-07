import { type UserModel } from '@/application/contract/model/user-model'
import { type UserRepository } from '@/application/contract/repository/user-repository'

export class UserMemoryRepository implements UserRepository {
  readonly users: UserModel[]

  constructor (users?: UserModel[]) {
    this.users = users ?? []
  }

  async get (email: string): Promise<UserModel | undefined> {
    return this.users.find(user => user.email === email)
  }

  async getById (id: string): Promise<UserModel | undefined> {
    return this.users.find(user => user.id === id)
  }

  async save (user: UserModel): Promise<void> {
    this.users.push(user)
  }
}
