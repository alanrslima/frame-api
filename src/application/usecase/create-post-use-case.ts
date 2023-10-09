import { Post } from '@/domain/entity/post'
import { type PostRepository } from '../contract/repository/post-repository'
import { Photo } from '@/domain/entity/photo'
import { type UserRepository } from '../contract/repository/user-repository'

export class CreatePostUseCase {
  constructor (private readonly postRepository: PostRepository, private readonly userRepository: UserRepository) {}

  async execute (input: CreatePostUseCaseInput): Promise<CreatePostUseCaseOutput> {
    const photos: Photo[] = []
    input?.photos?.forEach(photo => {
      photos.push(new Photo({ type: photo.type, url: photo.url }))
    })
    const owner = await this.userRepository.get(input.userId)
    const post = new Post({ description: input.description, photos, owner })
    await this.postRepository.save(post)
  }
}

export interface CreatePostUseCaseInput {
  userId: string
  description: string
  photos: Array<{
    type: string
    url: string
  }>
}

export type CreatePostUseCaseOutput = any
