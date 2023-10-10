import { type Comment } from './comment'
import { type Photo } from './photo'
import { randomUUID } from 'crypto'
import { type User } from './user'
import { type Like } from './like'
export class Post {
  readonly id: string
  readonly owner: User
  readonly description: string
  readonly photos: Photo[]
  readonly comments: Comment[]
  readonly likes: Like[]
  readonly createdAt: Date

  constructor (values: {
    owner: User
    description: string
    photos: Photo[]
    comments?: Comment[]
    likes?: Like[]
  }) {
    this.id = randomUUID()
    this.description = values.description
    this.photos = values.photos
    this.owner = values.owner
    this.likes = values?.likes ?? []
    this.comments = values.comments ?? []
    this.createdAt = new Date()
  }

  addComment (comment: Comment): void {
    this.comments.push(comment)
  }
}
