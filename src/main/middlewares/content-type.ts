import { NextFunction, Request, Response } from 'express'

const contentType = (req: Request, res: Response, next: NextFunction): void => {
  res.type('json')
  return next()
}

export { contentType }
