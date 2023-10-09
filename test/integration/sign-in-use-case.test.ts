import { SignInUseCase } from '@/application/usecase/sign-in-use-case'
import { User } from '@/domain/entity/user'
import { InvalidCredentialsError } from '@/domain/error/invalid-credentials-error'
import { UserMemoryRepository } from '@/infra/repository/memory/user-memory-repository'

test('Should sign in an registered user', async () => {
  const user = await User.create({ email: 'johndoe@email.com', name: 'John Doe', password: '!senha@forte#' })

  const userMemoryRepository = new UserMemoryRepository([user])
  const signInUseCase = new SignInUseCase(userMemoryRepository)
  const session = await signInUseCase.execute({
    email: 'johndoe@email.com',
    password: '!senha@forte#'
  })
  expect(session).toHaveProperty('token')
})

test('Should not sign in if the user does not exist', async () => {
  try {
    const userMemoryRepository = new UserMemoryRepository()
    const signInUseCase = new SignInUseCase(userMemoryRepository)
    await signInUseCase.execute({
      email: 'johndoe@gmail.com',
      password: '!senha@forte#'
    })
  } catch (error) {
    expect(error).toBeInstanceOf(Error)
    expect(error.message).toBe('User not found')
  }
})

test('Should not sign in if the user password is wrong', async () => {
  try {
    const fakeUser = await User.create({ email: 'johndoe@email.com', name: 'John Doe', password: 'strong@password' })
    const userMemoryRepository = new UserMemoryRepository([fakeUser])
    const signInUseCase = new SignInUseCase(userMemoryRepository)
    await signInUseCase.execute({
      email: 'johndoe@email.com',
      password: 'wrong_password'
    })
  } catch (error) {
    expect(error).toBeInstanceOf(InvalidCredentialsError)
  }
})
