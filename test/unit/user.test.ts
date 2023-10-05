import { User } from '@/domain/entity/user'

test('Should create an user', () => {
  const user = new User({ email: 'user@email.com' })
  expect(user.email).toBe('user@email.com')
})
