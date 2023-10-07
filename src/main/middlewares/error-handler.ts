// import { UserNotFoundError } from '@/data/errors'
// import { UnauthorizedError } from '@/domain/errors'
import { type Request, type Response, type NextFunction } from 'express'

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  // if (err instanceof UserNotFoundError) {
  //   res.status(404).json({ message: err?.message })
  // } else if (err instanceof UnauthorizedError) {
  //   res.status(401).json({ message: err?.message })
  // }
  res.status(500).json({ message: err?.message })
}
