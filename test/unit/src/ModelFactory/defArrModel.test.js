const chai = require('chai')
chai.should()
const expect = chai.expect



const kind = require('../../../../src/Validation/kind')
const AnyModel = require('../../../../src/Model/AnyModel')
const NonNegativeNumModel = require('../../../../src/Model/NonNegativeNumModel')
const resultUnwrap = require('../../../../src/Conversion/resultUnwrap')
const validateWithModel = require('../../../../src/Validation/validateWithModel')

const defArrModel = require('../../../../src/ModelFactory/defArrModel')

describe('defArrModel', function () {

  const AgeArrayModel = defArrModel('AgeArray', NonNegativeNumModel)

  const ValidateAgeArrayModel = validateWithModel(AgeArrayModel)

  it('should be able to define non-typed arrays', function () {
    const NonTypedArrayModel = defArrModel('NonTypedArray', AnyModel)
    expect(() => NonTypedArrayModel([])).to.not.throw()
    NonTypedArrayModel([]).should.eql([])
    expect(() => NonTypedArrayModel([0])).to.not.throw()
    NonTypedArrayModel([0]).should.eql([0])
    expect(() => NonTypedArrayModel(['a', 42])).to.not.throw()
    NonTypedArrayModel(['a',42]).should.eql(['a',42])
  })


  it('should pass for valid inputs, and return input', function () {
    expect(() => AgeArrayModel([])).to.not.throw()
    AgeArrayModel([]).should.eql([])
    expect(() => AgeArrayModel([0])).to.not.throw()
    AgeArrayModel([0]).should.eql([0])
    expect(() => AgeArrayModel([1, 42])).to.not.throw()
    AgeArrayModel([1,42]).should.eql([1,42])
  })

  it('should throw for arrays with invalid elements', function () {
    expect(() => AgeArrayModel([-1])).to.throw('Array[0] must be >= 0 (got: -1)')
    expect(() => AgeArrayModel(['foo'])).to.throw('expecting Array[0] to be Number, got String "foo"')
  })

  it('should only return 1 error for non-array inputs', function () {
    let result = resultUnwrap(ValidateAgeArrayModel())
    kind(result).should.equal('Array')
    result.length.should.equal(1)
    result[0].toString().should.equal('AgeArray: expecting Array of NonNegativeNumber, got undefined')

    result = resultUnwrap(ValidateAgeArrayModel(null))
    kind(result).should.equal('Array')
    result.length.should.equal(1)
    result[0].toString().should.equal('AgeArray: expecting Array of NonNegativeNumber, got null')

    result = resultUnwrap(ValidateAgeArrayModel(42))
    kind(result).should.equal('Array')
    result.length.should.equal(1)
    result[0].toString().should.equal('AgeArray: expecting Array of NonNegativeNumber, got Number 42')

    result = resultUnwrap(ValidateAgeArrayModel({foo: 1}))
    kind(result).should.equal('Array')
    result.length.should.equal(1)
    result[0].toString().should.equal(`AgeArray: expecting Array of NonNegativeNumber, got Object {
\tfoo: 1 
}`)

    result = resultUnwrap(ValidateAgeArrayModel('foo'))
    kind(result).should.equal('Array')
    result.length.should.equal(1)
    result[0].toString().should.equal('AgeArray: expecting Array of NonNegativeNumber, got String "foo"')
  })

  it('should only return 1 error for elements that are invalid', function () {
    let result = resultUnwrap(ValidateAgeArrayModel([-1]))
    kind(result).should.equal('Array')
    result.length.should.equal(1)
    result[0].toString().should.equal('AgeArray: Array[0] must be >= 0 (got: -1)')

    result = resultUnwrap(ValidateAgeArrayModel(['foo']))
    kind(result).should.equal('Array')
    result.length.should.equal(1)
    result[0].toString().should.equal('AgeArray: expecting Array[0] to be Number, got String "foo"')
  })

})
