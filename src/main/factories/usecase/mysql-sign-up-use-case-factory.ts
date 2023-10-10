import { SignUpUseCase } from '@/application/usecase/sign-up-use-case'
import { UserMysqlRepository } from '@/infra/repository/mysql/user-mysql-repository'

export const mysqlSignUpUseCaseFactory = (): SignUpUseCase => {
  const userMysqlRepository = new UserMysqlRepository()
  return new SignUpUseCase(userMysqlRepository)
}
