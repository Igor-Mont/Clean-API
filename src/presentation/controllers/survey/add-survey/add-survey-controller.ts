import { Controller, HttpRequest, HttpResponse, Validation } from './add-survey-controller-protocols'

class AddSurveyController implements Controller {
  constructor (
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    this.validation.validate(httpRequest.body)
    return new Promise(resolve => resolve(null))
  }
}

export { AddSurveyController }
