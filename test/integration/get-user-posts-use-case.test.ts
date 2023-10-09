import { GetUserPostsUseCase } from '@/application/usecase/get-user-posts-use-case'
import { Post } from '@/domain/entity/post'
import { User } from '@/domain/entity/user'
import { PostMemoryRepository } from '@/infra/repository/memory/post-memory-repository'

test('Should get only user posts', async () => {
  const owner1 = await User.create({ email: 'johndoe@email.com', name: 'John Doe', password: 'strong@password' })
  const post1 = new Post({ description: 'amazing post', owner: owner1, photos: [] })
  const owner2 = await User.create({ email: 'mary@email.com', name: 'Mary Anne', password: 'strong@password' })
  const post2 = new Post({ description: 'amazing post', owner: owner2, photos: [] })

  const postMemoryRepository = new PostMemoryRepository([post1, post2])
  const getUserPostsUseCase = new GetUserPostsUseCase(postMemoryRepository)
  const posts = await getUserPostsUseCase.execute({
    userId: owner2.id
  })
  expect(posts).toHaveLength(1)
  expect(posts[0].id).toBe(post2.id)
})
