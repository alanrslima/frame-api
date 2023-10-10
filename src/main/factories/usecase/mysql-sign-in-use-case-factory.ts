import { SignInUseCase } from '@/application/usecase/sign-in-use-case'
import { JwtAdapter } from '@/infra/cryptography/jwt-adapter'
import { UserMysqlRepository } from '@/infra/repository/mysql/user-mysql-repository'
import env from '@/main/config/env'

export const mysqlSignInUseCaseFactory = (): SignInUseCase => {
  const userMysqlRepository = new UserMysqlRepository()
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  return new SignInUseCase(userMysqlRepository, jwtAdapter)
}
