export class InvalidCredentialsError extends Error {
  constructor () {
    super('InvalidCredentials')
    this.name = 'InvalidCredentialsError'
    this.message = 'We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.'
  }
}
