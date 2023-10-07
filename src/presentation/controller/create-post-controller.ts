import { type CreatePostUseCaseOutput, type CreatePostUseCase } from '@/application/usecase/create-post-use-case'
import { ok } from '../helpers/http-helper'
import { type HttpResponse } from '../contracts/http-response'
import { type Controller } from '../contracts/controller'

export class CreatePostController implements Controller {
  constructor (
    private readonly createPostUseCase: CreatePostUseCase
  ) {}

  async handle (request: Request): Promise<HttpResponse<CreatePostUseCaseOutput>> {
    const { userId, description } = request
    const authenticationModel = await this.createPostUseCase.execute({ description, userId, files: [] })
    return ok(authenticationModel)
  }
}

interface Request {
  userId: string
  description: string

}
