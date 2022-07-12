import { MissingParamError } from '../../presentation/errors'
import { RequiredFieldsValidation } from './required-field-validation'

const makeSut = (): RequiredFieldsValidation => {
  return new RequiredFieldsValidation('field')
}

describe('RequiredField Validation', () => {
  test('should return a MissingParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ invalid: 'invalid' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('should not return if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_field' })
    expect(error).toBeFalsy()
  })
})
