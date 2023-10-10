export class ResourceNotFoundError extends Error {
  constructor () {
    super('ResourceNotFound')
    this.name = 'ResourceNotFoundError'
    this.message = 'Resource not found'
  }
}
