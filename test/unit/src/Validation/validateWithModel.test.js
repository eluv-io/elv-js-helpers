// unit test for validateWithModel.js

const chai = require('chai')
chai.should()

const validateWithModel = require('../../../../src/Validation/validateWithModel')

const resultUnwrap = require('../../../../src/Conversion/resultUnwrap')
const PositiveNumModel = require('../../../../src/Model/PositiveNumModel')

describe('validateWithModel', () => {

  it('should work as expected', () => {
    validateWithModel(PositiveNumModel, 42).inspect().should.equal('Ok 42')
    resultUnwrap(validateWithModel(PositiveNumModel, 0))[0].toString().should.equal( 'PositiveNumber: Value must be > 0 (got: 0)')
    resultUnwrap(validateWithModel(PositiveNumModel, 'foo'))[0].toString().should.equal( 'PositiveNumber: expecting Number, got String "foo"')
  })

  it('should be curried', () => {
    const validatePositiveNumber = validateWithModel(PositiveNumModel)
    validatePositiveNumber(42).inspect().should.equal('Ok 42')
    resultUnwrap(validatePositiveNumber(0))[0].toString().should.equal( 'PositiveNumber: Value must be > 0 (got: 0)')
    resultUnwrap(validatePositiveNumber('foo'))[0].toString().should.equal( 'PositiveNumber: expecting Number, got String "foo"')
  })
})
