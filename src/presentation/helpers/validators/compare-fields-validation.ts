import { InvalidParamError } from '../../errors'
import { Validation } from '../../protocols/validation'

class CompareFieldsValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly fieldToCompareName: string
  ) {}

  validate (input: any): Error {
    if (input[this.fieldName] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName)
    }
  }
}

export { CompareFieldsValidation }
