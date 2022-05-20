// unit test for validator.js

const chai = require('chai')
chai.should()

const validator = require('../../../../src/Validation/validator')

const resultUnwrap = require('../../../../src/Conversion/resultUnwrap')
const PositiveNumModel = require('../../../../src/Model/PositiveNumModel')

describe('validator', () => {

  it('should work as expected', () => {
    validator(PositiveNumModel, 42).inspect().should.equal('Ok 42')
    resultUnwrap(validator(PositiveNumModel, 0))[0].toString().should.equal( 'PositiveNumber: Value must be > 0 (got: 0)')
    resultUnwrap(validator(PositiveNumModel, 'foo'))[0].toString().should.equal( 'PositiveNumber: expecting Number, got String "foo"')
  })

  it('should be curried', () => {
    const validatePositiveNumber = validator(PositiveNumModel)
    validatePositiveNumber(42).inspect().should.equal('Ok 42')
    resultUnwrap(validatePositiveNumber(0))[0].toString().should.equal( 'PositiveNumber: Value must be > 0 (got: 0)')
    resultUnwrap(validatePositiveNumber('foo'))[0].toString().should.equal( 'PositiveNumber: expecting Number, got String "foo"')
  })
})
