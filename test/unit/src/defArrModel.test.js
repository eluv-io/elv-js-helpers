const chai = require('chai')
chai.should()
const expect = chai.expect

const equals = require('@eluvio/ramda-fork/src/equals')

const defArrModel = require('../../../src/defArrModel')
const kindOf = require('../../../src/kindOf')
const NonNegativeNumModel = require('../../../src/NonNegativeNumModel')
const resultUnwrap = require('../../../src/resultUnwrap')
const validator = require('../../../src/validator')

describe('defBoundedNumModel', function () {

  const AgeArrayModel = defArrModel('AgeArray', NonNegativeNumModel)

  const ValidateAgeArrayModel = validator(AgeArrayModel)

  it('should pass for valid inputs, and return input', function () {
    expect(() => AgeArrayModel([])).to.not.throw()
    equals(AgeArrayModel([]),[]).should.be.true
    expect(() => AgeArrayModel([0])).to.not.throw()
    equals(AgeArrayModel([0]),[0]).should.be.true
    expect(() => AgeArrayModel([1, 42])).to.not.throw()
    equals(AgeArrayModel([1,42]),[1,42]).should.be.true
  })

  it('should throw for arrays with invalid elements', function () {
    expect(() => AgeArrayModel([-1])).to.throw('Array[0] must be >= 0 (got: -1)')
    expect(() => AgeArrayModel(['foo'])).to.throw('expecting Array[0] to be Number, got String "foo"')
  })

  it('should only return 1 error for non-array inputs', function () {
    let result = resultUnwrap(ValidateAgeArrayModel())
    kindOf(result).should.equal('array')
    result.length.should.equal(1)
    result[0].toString().should.equal('AgeArray: expecting Array of NonNegativeNumber, got undefined')

    result = resultUnwrap(ValidateAgeArrayModel(null))
    kindOf(result).should.equal('array')
    result.length.should.equal(1)
    result[0].toString().should.equal('AgeArray: expecting Array of NonNegativeNumber, got null')

    result = resultUnwrap(ValidateAgeArrayModel(42))
    kindOf(result).should.equal('array')
    result.length.should.equal(1)
    result[0].toString().should.equal('AgeArray: expecting Array of NonNegativeNumber, got Number 42')

    result = resultUnwrap(ValidateAgeArrayModel({foo: 1}))
    kindOf(result).should.equal('array')
    result.length.should.equal(1)
    result[0].toString().should.equal(`AgeArray: expecting Array of NonNegativeNumber, got Object {
\tfoo: 1 
}`)

    result = resultUnwrap(ValidateAgeArrayModel('foo'))
    kindOf(result).should.equal('array')
    result.length.should.equal(1)
    result[0].toString().should.equal('AgeArray: expecting Array of NonNegativeNumber, got String "foo"')
  })

  it('should only return 1 error for elements that are invalid', function () {
    let result = resultUnwrap(ValidateAgeArrayModel([-1]))
    kindOf(result).should.equal('array')
    result.length.should.equal(1)
    result[0].toString().should.equal('AgeArray: Array[0] must be >= 0 (got: -1)')

    result = resultUnwrap(ValidateAgeArrayModel(['foo']))
    kindOf(result).should.equal('array')
    result.length.should.equal(1)
    result[0].toString().should.equal('AgeArray: expecting Array[0] to be Number, got String "foo"')
  })

})
