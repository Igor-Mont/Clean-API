import { EmailValidatorAdapter } from '../../../../infra/validators/email-validator-adapter'
import { Validation } from '../../../../presentation/protocols/validation'
import { EmailValidation, RequiredFieldsValidation, ValidationComposite } from '../../../../validation/validators'

const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['email', 'password']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}

export { makeLoginValidation }
