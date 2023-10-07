import { type PostModel } from '../model/post-model'

export interface PostRepository {
  save: (post: PostModel) => Promise<void>
  getByUser: (userId: string) => Promise<PostModel[]>
  get: (code: string) => Promise<PostModel>
}
