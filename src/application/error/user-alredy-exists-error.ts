export class UserAlreadyExistsError extends Error {
  constructor () {
    super('UserAlreadyExists')
    this.name = 'UserAlreadyExistsError'
    this.message = 'Usuário já cadastrado na plataforma'
  }
}

// We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.
// Email has already been taken
