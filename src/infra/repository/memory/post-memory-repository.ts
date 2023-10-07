import { type PostModel } from '@/application/contract/model/post-model'
import { type PostRepository } from '@/application/contract/repository/post-repository'

export class PostMemoryRepository implements PostRepository {
  readonly posts: PostModel[]

  constructor (posts?: PostModel[]) {
    this.posts = posts ?? []
  }

  async save (post: PostModel): Promise<void> {
    this.posts.push(post)
  }

  async getByUser (userId: string): Promise<PostModel[]> {
    return this.posts.filter(post => post.userId === userId)
  }

  async get (code: string): Promise<PostModel> {
    const post = this.posts.find(post => post.id === code)
    if (!post) { throw new Error('Post not found') }
    return post
  }
}
