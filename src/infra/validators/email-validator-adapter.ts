import isEmail from 'validator/lib/isEmail'
import { EmailValidator } from '../../validation/protocols/email-validator'

class EmailValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean {
    return isEmail(email)
  }
}

export { EmailValidatorAdapter }
