import { InvalidEmailError } from '../error/invalid-email-error'

export default class Email {
  private readonly value: string

  constructor (email: string) {
    if (!String(email).toLowerCase().match(/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/)) {
      throw new InvalidEmailError()
    }
    this.value = email
  }

  getValue (): string {
    return this.value
  }
}
