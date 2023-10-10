import { type Controller } from '@/presentation/contracts/controller'
import { SignUpController } from '@/presentation/controller/sign-up-controller'
import { mysqlSignUpUseCaseFactory } from '../usecase/mysql-sign-up-use-case-factory'

export const signUpControllerFactory = (): Controller => {
  const controller = new SignUpController(mysqlSignUpUseCaseFactory())
  return controller
}
