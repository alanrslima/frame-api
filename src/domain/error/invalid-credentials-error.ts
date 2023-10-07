export class InvalidCredentialsError extends Error {
  constructor () {
    super('InvalidCredentials')
    this.name = 'InvalidCredentialsError'
    this.message = 'Invalid credentials'
  }
}
