import { CreatePostUseCase } from '@/application/usecase/create-post-use-case'
import { User } from '@/domain/entity/user'
import { PostMemoryRepository } from '@/infra/repository/memory/post-memory-repository'
import { UserMemoryRepository } from '@/infra/repository/memory/user-memory-repository'

test('Should create a new post', async () => {
  const postMemoryRepository = new PostMemoryRepository()
  const fakeUser = await User.create({ email: 'johndoe@email.com', name: 'John Doe', password: 'strong@password' })
  const userMemoryRepository = new UserMemoryRepository([fakeUser])
  const createPostUseCase = new CreatePostUseCase(postMemoryRepository, userMemoryRepository)
  await createPostUseCase.execute({
    userId: fakeUser.id,
    description: 'My new post',
    photos: [{
      type: 'image/jpeg',
      url: 'https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg'
    }]
  })

  expect(postMemoryRepository.posts).toHaveLength(1)
  expect(postMemoryRepository.posts[0].photos).toHaveLength(1)
  expect(postMemoryRepository.posts[0].description).toBe('My new post')
  expect(postMemoryRepository.posts[0].owner.id).toBe(fakeUser.id)
})
