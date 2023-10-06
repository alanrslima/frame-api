import { pbkdf2, randomBytes } from 'crypto'
import { InvalidPasswordError } from '../error/invalid-password-error'

export default class Password {
  private readonly value: string

  constructor (value: string, readonly salt: string) {
    this.value = value
  }

  static async create (password: string, salt?: string): Promise<Password> {
    if (password.length < 8) throw new InvalidPasswordError()
    const generatedSalt = salt ?? randomBytes(20).toString('hex')
    return await new Promise((resolve, reject) => {
      pbkdf2(password, generatedSalt, 100, 64, 'sha512', (err, value) => {
        if (err) { reject(err) }
        resolve(new Password(value?.toString('hex'), generatedSalt))
      })
    })
  }

  async validate (plainPassword: string): Promise<boolean> {
    return await new Promise((resolve, reject) => {
      pbkdf2(plainPassword, this.salt, 100, 64, 'sha512', (err, value) => {
        if (err) { reject(err) }
        resolve(this.value === value.toString())
      })
    })
  }

  getValue (): string {
    return this.value
  }
}
