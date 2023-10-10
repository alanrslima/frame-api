import { type CreatePostUseCaseOutput } from '@/application/usecase/create-post-use-case'
import { ok } from '../helpers/http-helper'
import { type HttpResponse } from '../contracts/http-response'
import { type Controller } from '../contracts/controller'
import { type SignInUseCase } from '@/application/usecase/sign-in-use-case'

export class SignInController implements Controller {
  constructor (
    private readonly signInUseCase: SignInUseCase
  ) {}

  async handle (request: Request): Promise<HttpResponse<CreatePostUseCaseOutput>> {
    const { email, password } = request
    const response = await this.signInUseCase.execute({ email, password })
    return ok(response)
  }
}

interface Request {
  email: string
  password: string

}
