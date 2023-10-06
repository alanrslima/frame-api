import { User } from '@/domain/entity/user'
import { InvalidEmailError } from '@/domain/error/invalid-email-error'
import { InvalidPasswordError } from '@/domain/error/invalid-password-error'

test('Should create a new user', async () => {
  const user = await User.create({ email: 'fulano@email.com', password: '1senha@forte#', name: 'Fulano' })
  expect(user.email.getValue()).toBe('fulano@email.com')
})

test('Should not create an user with invalid password', async () => {
  try {
    await User.create({ email: 'fulano@email.com', password: '123', name: 'Fulano' })
  } catch (error) {
    expect(error).toBeInstanceOf(InvalidPasswordError)
    expect(error.message).toBe('Senha inválida')
  }
})

test('Should not create an user with invalid email', async () => {
  try {
    await User.create({ email: 'emailinvalido', password: '1senha@forte#', name: 'Fulano' })
  } catch (error) {
    expect(error).toBeInstanceOf(InvalidEmailError)
    expect(error.message).toBe('Email inválido')
  }
})
