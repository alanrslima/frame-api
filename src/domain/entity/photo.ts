export class Photo {
  readonly url: string
  readonly type: string

  constructor (values: { url: string, type: string }) {
    this.url = values.url
    this.type = values.type
  }
}
