import { MissingParamError } from '../../presentation/errors'
import { Validation } from '../../presentation/protocols'

class RequiredFieldsValidation implements Validation {
  constructor (private readonly fieldName: string) {}

  validate (input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}

export { RequiredFieldsValidation }
