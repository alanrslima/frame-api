import { CommentPostUseCase } from '@/application/usecase/comment-post-use-case'
import { Post } from '@/domain/entity/post'
import { User } from '@/domain/entity/user'
import { PostMemoryRepository } from '@/infra/repository/memory/post-memory-repository'
import { UserMemoryRepository } from '@/infra/repository/memory/user-memory-repository'

test('Should comment a post', async () => {
  const fakeUser = await User.create({ email: 'johndoe@email.com', name: 'John Doe', password: 'strong@password' })
  const fakePost = new Post({ owner: fakeUser, description: 'amazing post', photos: [] })
  const postMemoryRepository = new PostMemoryRepository([fakePost])
  const userMemoryRepository = new UserMemoryRepository([fakeUser])
  const commentPostUseCase = new CommentPostUseCase(postMemoryRepository, userMemoryRepository)
  await commentPostUseCase.execute({
    userId: fakeUser.id,
    postId: fakePost.id,
    description: 'Nice photo!'
  })
  expect(postMemoryRepository.posts).toHaveLength(1)
  expect(postMemoryRepository.posts[0].comments).toHaveLength(1)
  expect(postMemoryRepository.posts[0].comments[0].description).toBe('Nice photo!')
})

test('Should not comment if a post does not exists', async () => {
  try {
    const fakeUser = await User.create({ email: 'johndoe@email.com', name: 'John Doe', password: 'strong@password' })
    const postMemoryRepository = new PostMemoryRepository()
    const userMemoryRepository = new UserMemoryRepository([fakeUser])
    const commentPostUseCase = new CommentPostUseCase(postMemoryRepository, userMemoryRepository)
    await commentPostUseCase.execute({
      userId: fakeUser.id,
      postId: '123',
      description: 'Nice photo!'
    })
  } catch (error) {
    expect(error.message).toBe('Post not found')
  }
})
