export default class Name {
  private readonly value: string

  constructor (name: string) {
    if (name.length < 2) throw new Error('Invalid name')
    this.value = name
  }

  getValue (): string {
    return this.value
  }
}
