import { type UserModel } from '../model/user-model'

export interface UserRepository {
  save: (user: Omit<UserModel, 'id'>) => Promise<void>
  get: (id: string) => Promise<UserModel>
  getByEmail: (email: string) => Promise<UserModel>
  some: (id: string) => Promise<boolean>
}
