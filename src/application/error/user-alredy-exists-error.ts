export class UserAlreadyExistsError extends Error {
  constructor () {
    super('UserAlreadyExists')
    this.name = 'UserAlreadyExistsError'
    this.message = 'Email has already been taken'
  }
}
