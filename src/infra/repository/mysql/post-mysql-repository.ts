import { type PostRepository } from '@/application/contract/repository/post-repository'
import { type Post } from '@/domain/entity/post'
import { MysqlDataSource } from '@/infra/data-source/mysql/mysql-data-source'

export class PostMysqlRepository implements PostRepository {
  update: (post: Post) => Promise<void>
  delete: (code: string, ownerId: string) => Promise<void>
  readonly posts: Post[]

  async save (post: Post): Promise<void> {
   await new Promise((resolve, reject) => {
    MysqlDataSource.connection?.query(
      'INSERT INTO `posts` (post_id, owner_id, description, created_at) VALUES (?, ?, ?, ?)',
      [post.id, post.owner.id, post.description, post.createdAt],
      (err) => {
        if (err) { reject(err) }
        resolve(null)
      })
   })
  }

  async getByUser (userId: string): Promise<Post[]> {
    throw new Error('Method not implemented')
  }

  async get (code: string): Promise<Post> {
    throw new Error('Method not implemented')
  }
}
