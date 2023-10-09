import { type User } from './user'

export class Like {
  readonly owner: User
  readonly createdAt: Date

  constructor (values: { owner: User }) {
    this.owner = values.owner
    this.createdAt = new Date()
  }
}
