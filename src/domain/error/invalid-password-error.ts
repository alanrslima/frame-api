export class InvalidPasswordError extends Error {
  constructor () {
    super('InvalidPassword')
    this.name = 'InvalidPasswordError'
    this.message = 'Senha inválida'
  }
}
