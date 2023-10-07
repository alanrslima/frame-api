import { CreatePostUseCase } from '@/application/usecase/create-post-use-case'
import { PostMemoryRepository } from '@/infra/repository/memory/post-memory-repository'

test('Should create a new post', async () => {
  const postMemoryRepository = new PostMemoryRepository()
  const createPostUseCase = new CreatePostUseCase(postMemoryRepository)
  await createPostUseCase.execute({
    userId: '1234',
    description: 'My new post',
    photos: [{
      type: 'image/jpeg',
      url: 'https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg'
    }]
  })

  expect(postMemoryRepository.posts).toHaveLength(1)
  expect(postMemoryRepository.posts[0].photos).toHaveLength(1)
  expect(postMemoryRepository.posts[0].description).toBe('My new post')
})
