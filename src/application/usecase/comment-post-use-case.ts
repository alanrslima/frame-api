import { type PostRepository } from '../contract/repository/post-repository'
import { Comment } from '@/domain/entity/comment'
import { type UserRepository } from '../contract/repository/user-repository'

export class CommentPostUseCase {
  constructor (private readonly postRepository: PostRepository, private readonly userRepository: UserRepository) {}

  async execute (input: CommentPostUseCaseInput): Promise<CommentPostUseCaseOutput> {
    const user = await this.userRepository.get(input.userId)
    const post = await this.postRepository.get(input.postId)
    const comment = new Comment({ owner: user, description: input.description })
    post.addComment(comment)
    await this.postRepository.update(post)
  }
}

export interface CommentPostUseCaseInput {
  userId: string
  postId: string
  description: string
}

export type CommentPostUseCaseOutput = any
