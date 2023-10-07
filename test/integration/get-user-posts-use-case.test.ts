import { GetUserPostsUseCase } from '@/application/usecase/get-user-posts-use-case'
import { PostMemoryRepository } from '@/infra/repository/memory/post-memory-repository'

test('Should get only user posts', async () => {
  const postMemoryRepository = new PostMemoryRepository([
    {
      id: '1',
      description: 'post1',
      photos: [{ url: 'www.post.com' }],
      userId: '123'
    },
    {
      id: '2',
      description: 'post2',
      photos: [{ url: 'www.post2.com' }],
      userId: '1234'
    }
  ])
  const getUserPostsUseCase = new GetUserPostsUseCase(postMemoryRepository)
  const posts = await getUserPostsUseCase.execute({
    userId: '1234'
  })
  expect(posts).toHaveLength(1)
  expect(posts[0].id).toBe('2')
})
