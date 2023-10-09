import { type PostRepository } from '@/application/contract/repository/post-repository'
import { type Post } from '@/domain/entity/post'

export class PostMemoryRepository implements PostRepository {
  posts: Post[]

  constructor (posts?: Post[]) {
    this.posts = posts ?? []
  }

  async delete (code: string, ownerId: string): Promise<void> {
    const post = await this.get(code)
    if (post.owner.id !== ownerId) { throw new Error("You don't have permission to access this resource") }
    const posts = this.posts.filter(item => item.id !== post.id)
    this.posts = posts
  }

  async save (post: Post): Promise<void> {
    this.posts.push(post)
  }

  async getByUser (userId: string): Promise<Post[]> {
    return this.posts.filter(post => post.owner.id === userId)
  }

  async get (code: string): Promise<Post> {
    const post = this.posts.find(post => post.id === code)
    if (!post) { throw new Error('Post not found') }
    return post
  }

  async update (post: Post): Promise<void> {
    const posts = this.posts.map(item => item.id === post.id ? post : item)
    this.posts = posts
  }
}
