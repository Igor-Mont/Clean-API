import { Validation } from '../../../../presentation/protocols/validation'
import { EmailValidator } from '../../../../validation/protocols/email-validator'
import { EmailValidation, RequiredFieldsValidation, ValidationComposite } from '../../../../validation/validators'
import { makeLoginValidation } from './login-validation-factory'

jest.mock('../../../../validation/validators/validation-composite')

const makeEmailValidatorStub = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

describe('SignUpValidation Factory', () => {
  test('should call ValidationComposite with all validations', () => {
    makeLoginValidation()
    const validations: Validation[] = []
    for (const field of ['email', 'password']) {
      validations.push(new RequiredFieldsValidation(field))
    }
    validations.push(new EmailValidation('email', makeEmailValidatorStub()))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
