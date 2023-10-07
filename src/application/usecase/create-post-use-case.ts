import { Post } from '@/domain/entity/post'
import { type PostRepository } from '../contract/repository/post-repository'
import { Photo } from '@/domain/entity/photo'

export class CreatePostUseCase {
  constructor (private readonly postRepository: PostRepository) {}

  async execute (input: CreatePostUseCaseInput): Promise<CreatePostUseCaseOutput> {
    const photos: Photo[] = []
    input?.photos?.forEach(photo => {
      photos.push(new Photo({ type: photo.type, url: photo.url }))
    })
    const post = new Post({ description: input.description, photos })
    await this.postRepository.save({
      id: post.id,
      description: post.description,
      photos: post.photos.map(photo => ({ url: photo.url })),
      userId: input.userId
    })
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
