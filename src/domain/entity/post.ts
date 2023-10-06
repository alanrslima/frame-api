import { type Asset } from './asset'
import { type User } from './user'

export class Post {
  readonly description: string
  readonly assets: Asset[]
  readonly owner: User

  constructor (values: {
    description: string
    assets: Asset[]
    owner: User
  }) {
    this.description = values.description
    this.assets = values.assets
  }
}
