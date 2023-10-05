import { type Asset } from './asset'

export class Post {
  readonly description: string
  readonly assets: Asset[]

  constructor (values: {
    description: string
    assets: Asset[]
  }) {
    this.description = values.description
    this.assets = values.assets
  }
}
