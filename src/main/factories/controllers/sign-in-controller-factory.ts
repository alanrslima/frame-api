import { type Controller } from '@/presentation/contracts/controller'
import { SignInController } from '@/presentation/controller/sign-in-controller'
import { mysqlSignInUseCaseFactory } from '../usecase/mysql-sign-in-use-case-factory'

export const signInControllerFactory = (): Controller => {
  const controller = new SignInController(mysqlSignInUseCaseFactory())
  return controller
}
