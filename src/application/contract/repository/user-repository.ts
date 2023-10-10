import { type User } from '@/domain/entity/user'

export interface UserRepository {
  save: (user: User) => Promise<void>
  get: (id: string) => Promise<User>
  getByEmail: (email: string) => Promise<User>
  some: (email: string) => Promise<boolean>
}
