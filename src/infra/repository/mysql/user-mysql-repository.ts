import { type UserRepository } from '@/application/contract/repository/user-repository'
import { ResourceNotFoundError } from '@/application/error/resource-not-found-error'
import { User } from '@/domain/entity/user'
import { MysqlDataSource } from '@/infra/data-source/mysql/mysql-data-source'

export class UserMysqlRepository implements UserRepository {
  async save (user: User): Promise<void> {
    await new Promise((resolve, reject) => {
      MysqlDataSource.connection?.query(
        'INSERT INTO `users` (user_id, email, name, password, resume, created_at) VALUES (?, ?, ?, ?, ?, ?)',
        [user.id, user.email.getValue(), user.name.getValue(), user.password.getValue(), user.resume, user.createdAt],
        (err) => {
          if (err) { reject(err) }
          resolve(null)
        })
    })
  }

  async get (id: string): Promise<User> {
    return await new Promise((resolve, reject) => {
      MysqlDataSource.connection?.query(
        'SELECT user_id, password, email, name, resume, created_at FROM users WHERE `user_id` = ?', [id],
        (err, results) => {
          if (err) { reject(err) }
          if (Array.isArray(results)) {
            const [userData] = results as any
            if (!userData) { reject(new ResourceNotFoundError()); return }
            const user = User.buildExistingUser({ email: userData.email, hashPassword: userData.password, id: userData.user_id, name: userData.name })
            resolve(user)
          }
        }
      )
    })
  }

  async getByEmail (email: string): Promise<User> {
    return await new Promise((resolve, reject) => {
      MysqlDataSource.connection?.query(
        'SELECT user_id, password, email, name, resume, created_at FROM users WHERE `email` = ?', [email],
        (err, results) => {
          if (err) { reject(err) }
          if (Array.isArray(results)) {
            const [userData] = results as any
            if (!userData) { reject(new Error('User not found')); return }
            const user = User.buildExistingUser({ email: userData.email, hashPassword: userData.password, id: userData.user_id, name: userData.name })
            resolve(user)
          }
        }
      )
    })
  }

  async some (email: string): Promise<boolean> {
    return await new Promise((resolve, reject) => {
      MysqlDataSource.connection?.query(
        'SELECT user_id FROM `users` WHERE `email` = ?', [email],
        (err, results) => {
          if (err) { reject(err) }
          if (Array.isArray(results)) {
            resolve(!!results.length)
          }
        })
    })
  }
}
