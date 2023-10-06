import { UserAlreadyExistsError } from '@/application/error/user-alredy-exists-error'
import { SignUpUseCase } from '@/application/usecase/sign-up-use-case'
import { UserMemoryRepository } from '@/infra/repository/memory/user-memory-repository'

test('Should sign up a new user', async () => {
  const userMemoryRepository = new UserMemoryRepository()
  const signUpUseCase = new SignUpUseCase(userMemoryRepository)
  await signUpUseCase.execute({
    email: 'fulano@email.com',
    name: 'Fulano',
    password: '!senha@forte#'
  })
  expect(userMemoryRepository.users).toHaveLength(1)
  expect(userMemoryRepository.users[0].email).toBe('fulano@email.com')
  expect(userMemoryRepository.users[0].name).toBe('Fulano')
  expect(userMemoryRepository.users[0].password).toBe('ed73d8e980539ab246f88ed1e056fd86eea364a52942154bcd750f2a7f975ea843df7a3c74d70a19747cac097ac1a2e154367ea17adb17abe2b9604da5860810')
})

test('Should not sign up a user if already exists', async () => {
  const userMemoryRepository = new UserMemoryRepository([{
    email: 'fulano@email.com',
    name: 'Fulano',
    password: 'ed73d8e980539ab246f88ed1e056fd86eea364a52942154bcd750f2a7f975ea843df7a3c74d70a19747cac097ac1a2e154367ea17adb17abe2b9604da5860810'
  }])

  try {
    const signUpUseCase = new SignUpUseCase(userMemoryRepository)
    await signUpUseCase.execute({
      email: 'fulano@email.com',
      name: 'Fulano',
      password: '!senha@forte#'
    })
  } catch (error) {
    expect(error).toBeInstanceOf(UserAlreadyExistsError)
    expect(error.message).toBe('Usuário já cadastrado na plataforma')
  }
})
