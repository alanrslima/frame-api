import { type UserModel } from '../model/user-model'

export interface UserRepository {
  save: (user: UserModel) => Promise<void>
  get: (email: string) => Promise<UserModel | undefined>
}
