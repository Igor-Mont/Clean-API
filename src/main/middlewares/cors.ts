import { NextFunction, Request, Response } from 'express'

const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.set('Access-control-allow-origin', '*')
  res.set('Access-control-allow-methods', '*')
  res.set('Access-control-allow-headers', '*')
  return next()
}

export { cors }
