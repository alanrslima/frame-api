import { type HttpResponse } from '../contracts/http-response'

export const badRequest = (error: Error): HttpResponse<any> => ({
  statusCode: 400,
  body: error
})

export const forbidden = (error: Error): HttpResponse<any> => ({
  statusCode: 403,
  body: error
})

export const unauthorized = (error: Error): HttpResponse<any> => ({
  statusCode: 401,
  body: error
})

export const serverError = (error: Error): HttpResponse<any> => ({
  statusCode: 500,
  body: error.stack
})

export const ok = (data: any): HttpResponse<any> => ({
  statusCode: 200,
  body: data
})

export const created = (data: any): HttpResponse<any> => ({
  statusCode: 201,
  body: data
})

export const noContent = (): HttpResponse<any> => ({
  statusCode: 204,
  body: null
})
