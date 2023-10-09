import { type Post } from '@/domain/entity/post'

export interface PostRepository {
  save: (post: Post) => Promise<void>
  update: (post: Post) => Promise<void>
  getByUser: (userId: string) => Promise<Post[]>
  get: (code: string) => Promise<Post>
  delete: (code: string, ownerId: string) => Promise<void>
}
