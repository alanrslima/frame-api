export class InvalidEmailError extends Error {
  constructor () {
    super('InvalidEmail')
    this.name = 'InvalidEmailError'
    this.message = 'Email inválido'
  }
}
