import { type Controller } from '@/presentation/contracts/controller'
import { CreatePostController } from '@/presentation/controller/create-post-controller'
import { mysqlCreatePostUseCaseFactory } from '../usecase/mysql-create-post-use-case-factory'

export const createPostControllerFactory = (): Controller => {
  const controller = new CreatePostController(mysqlCreatePostUseCaseFactory())
  return controller
}
