import { type PostModel } from '@/application/contract/model/post-model'
import { type PostRepository } from '@/application/contract/repository/post-repository'
import { MysqlDataSource } from '@/infra/data-source/mysql/mysql-data-source'

export class PostMysqlRepository implements PostRepository {
  readonly posts: PostModel[]

  async save (post: PostModel): Promise<void> {
    throw new Error('Method not implemented')
  }

  async getByUser (userId: string): Promise<PostModel[]> {
    throw new Error('Method not implemented')
  }

  async get (code: string): Promise<PostModel> {
    return await new Promise((resolve, reject) => {
      MysqlDataSource.connection?.query('SELECT * FROM posts WHERE `id` = ?', [code], (err, results) => {
        if (err) { reject(err) }
        resolve({ description: '123', id: '1', photos: [], userId: '123', comments: [] })
      })
    })
  }
}
