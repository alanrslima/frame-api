import { type CreatePostUseCaseOutput } from '@/application/usecase/create-post-use-case'
import { ok } from '../helpers/http-helper'
import { type HttpResponse } from '../contracts/http-response'
import { type Controller } from '../contracts/controller'
import { type SignUpUseCase } from '@/application/usecase/sign-up-use-case'

export class SignUpController implements Controller {
  constructor (
    private readonly signUpUseCase: SignUpUseCase
  ) {}

  async handle (request: Request): Promise<HttpResponse<CreatePostUseCaseOutput>> {
    const { email, name, password } = request
    const response = await this.signUpUseCase.execute({ email, name, password })
    return ok(response)
  }
}

interface Request {
  email: string
  name: string
  password: string
}
