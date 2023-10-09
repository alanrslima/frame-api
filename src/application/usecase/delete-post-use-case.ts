import { type PostRepository } from '../contract/repository/post-repository'

export class DeletePostUseCase {
  constructor (private readonly postRepository: PostRepository) {}

  async execute (input: DeletePostUseCaseInput): Promise<void> {
    await this.postRepository.delete(input.postId, input.userId)
  }
}

export interface DeletePostUseCaseInput {
  userId: string
  postId: string
}
