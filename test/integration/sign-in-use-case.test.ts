import { SignInUseCase } from '@/application/usecase/sign-in-use-case'
import { InvalidCredentialsError } from '@/domain/error/invalid-credentials-error'
import { UserMemoryRepository } from '@/infra/repository/memory/user-memory-repository'

test('Should sign in an registered user', async () => {
  const userMemoryRepository = new UserMemoryRepository([{
    email: 'johndoe@gmail.com',
    id: '123',
    name: 'John Doe',
    password: 'ed73d8e980539ab246f88ed1e056fd86eea364a52942154bcd750f2a7f975ea843df7a3c74d70a19747cac097ac1a2e154367ea17adb17abe2b9604da5860810'
  }])
  const signInUseCase = new SignInUseCase(userMemoryRepository)
  const session = await signInUseCase.execute({
    email: 'johndoe@gmail.com',
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
    const userMemoryRepository = new UserMemoryRepository([
      {
        email: 'johndoe@gmail.com',
        id: '123',
        name: 'John Doe',
        password: 'ed73d8e980539ab246f88ed1e056fd86eea364a52942154bcd750f2a7f975ea843df7a3c74d70a19747cac097ac1a2e154367ea17adb17abe2b9604da5860810'
      }
    ])
    const signInUseCase = new SignInUseCase(userMemoryRepository)
    await signInUseCase.execute({
      email: 'johndoe@gmail.com',
      password: 'wrong_password'
    })
  } catch (error) {
    expect(error).toBeInstanceOf(InvalidCredentialsError)
  }
})
