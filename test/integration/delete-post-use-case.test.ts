import { DeletePostUseCase } from '@/application/usecase/delete-post-use-case'
import { Post } from '@/domain/entity/post'
import { User } from '@/domain/entity/user'
import { PostMemoryRepository } from '@/infra/repository/memory/post-memory-repository'

test("Should delete a post if I'm the owner", async () => {
  const fakeOwner = await User.create({ email: 'johndoe@email.com', name: 'John Doe', password: 'Strong@password' })
  const fakePost = new Post({ description: 'amazing post', owner: fakeOwner, photos: [] })
  const postMemoryRepository = new PostMemoryRepository([fakePost])
  const deletePostUseCase = new DeletePostUseCase(postMemoryRepository)
  await deletePostUseCase.execute({ userId: fakeOwner.id, postId: fakePost.id })
  expect(postMemoryRepository.posts).toHaveLength(0)
})

test('Should not delete if a post doest not exists', async () => {
  try {
    const fakeOwner = await User.create({ email: 'johndoe@email.com', name: 'John Doe', password: 'Strong@password' })
    const postMemoryRepository = new PostMemoryRepository()
    const deletePostUseCase = new DeletePostUseCase(postMemoryRepository)
    await deletePostUseCase.execute({ userId: fakeOwner.id, postId: '123' })
  } catch (error) {
    expect(error.message).toBe('Post not found')
  }
})

test("Should not delete a post if I'm not the owner", async () => {
  try {
    const fakeOwner = await User.create({ email: 'johndoe@email.com', name: 'John Doe', password: 'Strong@password' })
    const fakePost = new Post({ description: 'amazing post', owner: fakeOwner, photos: [] })
    const postMemoryRepository = new PostMemoryRepository([fakePost])
    const deletePostUseCase = new DeletePostUseCase(postMemoryRepository)
    await deletePostUseCase.execute({ userId: '123', postId: fakePost.id })
  } catch (error) {
    expect(error.message).toBe("You don't have permission to access this resource")
  }
})
