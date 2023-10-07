import { type Controller } from '@/presentation/contracts/controller'
import { type NextFunction, type Request, type Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const request = {
      ...(req.body ?? {}),
      ...(req.params ?? {})

      // userId: req?.userId
    }
    try {
      const httpResponse = await controller.handle(request)
      if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
        res.status(httpResponse.statusCode).json(httpResponse.body)
      } else {
        res.status(httpResponse.statusCode).json({
          message: httpResponse.body.message
        })
      }
    } catch (error) {
      next(error)
    }
  }
}
