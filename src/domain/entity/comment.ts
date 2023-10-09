import { type User } from './user'

export class Comment {
  readonly owner: User
  readonly description: string
  readonly createdAt: Date

  constructor (values: { owner: User, description: string }) {
    this.owner = values.owner
    this.description = values.description
    this.createdAt = new Date()
  }
}
