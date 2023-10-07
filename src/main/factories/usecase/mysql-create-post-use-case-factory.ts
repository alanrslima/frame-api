import { CreatePostUseCase } from '@/application/usecase/create-post-use-case'
import { PostMysqlRepository } from '@/infra/repository/mysql/post-mysql-repository'

export const mysqlCreatePostUseCaseFactory = (): CreatePostUseCase => {
  const postRepository = new PostMysqlRepository()
  return new CreatePostUseCase(postRepository)
}
