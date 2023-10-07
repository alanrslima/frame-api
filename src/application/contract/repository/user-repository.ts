import { type UserModel } from '../model/user-model'

export interface UserRepository {
  save: (user: Omit<UserModel, 'id'>) => Promise<void>
  get: (email: string) => Promise<UserModel | undefined>
  getById: (id: string) => Promise<UserModel | undefined>
}
