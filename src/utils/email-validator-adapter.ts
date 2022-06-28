import { EmailValidator } from '../presentation/protocols/email-validator'
import isEmail from 'validator/lib/isEmail'

class EmailValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean {
    return isEmail(email)
  }
}

export { EmailValidatorAdapter }
