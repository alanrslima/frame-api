import { type User } from '@/domain/entity/user'

export interface UserRepository {
  save: (user: Omit<User, 'id'>) => Promise<void>
  get: (id: string) => Promise<User>
  getByEmail: (email: string) => Promise<User>
  some: (id: string) => Promise<boolean>
}
