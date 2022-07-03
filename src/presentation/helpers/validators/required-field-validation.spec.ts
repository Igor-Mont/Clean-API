import { MissingParamError } from '../../errors'
import { RequiredFieldsValidation } from './required-field-validation'

describe('RequiredField Validation', () => {
  test('should return a MissingParamError if validation fails', () => {
    const sut = new RequiredFieldsValidation('field')
    const error = sut.validate({ invalid: 'invalid' })
    expect(error).toEqual(new MissingParamError('field'))
  })
})
