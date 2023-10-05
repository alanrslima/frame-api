export class User {
  readonly email: string

  constructor (values: {
    email: string
  }) {
    this.email = values.email
  }
}
