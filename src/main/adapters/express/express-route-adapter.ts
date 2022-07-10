import { Request, RequestHandler, Response } from 'express'
import { Controller, HttpRequest } from '../../../presentation/protocols'

const adaptRoute = (controller: Controller): RequestHandler => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)

    if (httpResponse.body instanceof Error) {
      return res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }

    return res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}

export { adaptRoute }
