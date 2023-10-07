import { type Photo } from './photo'
import { randomUUID } from 'crypto'
export class Post {
  readonly id: string
  readonly description: string
  readonly photos: Photo[]

  constructor (values: {
    description: string
    photos: Photo[]
  }) {
    this.id = randomUUID()
    this.description = values.description
    this.photos = values.photos
  }
}
