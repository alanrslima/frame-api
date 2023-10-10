import { CreatePostUseCase } from '@/application/usecase/create-post-use-case'
import { PostMysqlRepository } from '@/infra/repository/mysql/post-mysql-repository'
import { UserMysqlRepository } from '@/infra/repository/mysql/user-mysql-repository'

export const mysqlCreatePostUseCaseFactory = (): CreatePostUseCase => {
  const postRepository = new PostMysqlRepository()
  const userRepository = new UserMysqlRepository()
  return new CreatePostUseCase(postRepository, userRepository)
}
