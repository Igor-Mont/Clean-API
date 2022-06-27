import { ServerError } from '../errors/server-error'
import { HttpResponse } from '../protocols/http'

const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error
  }
}

const serverError = (): HttpResponse => {
  return {
    statusCode: 500,
    body: new ServerError()
  }
}

export { badRequest, serverError }
