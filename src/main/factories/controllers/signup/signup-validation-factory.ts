import { EmailValidatorAdapter } from '../../../../infra/validators/email-validator-adapter'
import { Validation } from '../../../../presentation/protocols/validation'
import { CompareFieldsValidation, EmailValidation, RequiredFieldsValidation, ValidationComposite } from '../../../../validation/validators'

const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}

export { makeSignUpValidation }
