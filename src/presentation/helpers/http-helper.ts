import { HttpResponse } from '../protocols/http'

const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error
  }
}

export { badRequest }
