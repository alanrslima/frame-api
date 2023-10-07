import { type PostRepository } from '../contract/repository/post-repository'

export class GetUserPostsUseCase {
  constructor (private readonly postRepository: PostRepository) {}

  async execute (input: CreatePostUseCaseInput): Promise<CreatePostUseCaseOutput> {
    const posts = await this.postRepository.getByUser(input.userId)
    return posts
  }
}

export interface CreatePostUseCaseInput {
  userId: string
}

export type CreatePostUseCaseOutput = any
