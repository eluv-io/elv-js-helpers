// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const validateWithModel = TH.requireSrcFile('Validation/validateWithModel')

describe('validateWithModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    const PositiveNumModel = TH.requireSrcFile('Model/PositiveNumModel')
    const resultToPOJO = TH.requireSrcFile('Conversion/ResultToPOJO')
    const goodResult = validateWithModel(PositiveNumModel, 42)
    goodResult.inspect().should.eql('Ok 42')
    resultToPOJO(goodResult).ok.should.eql(true)
    resultToPOJO(goodResult).value.should.eql(42)
    const errZeroInput = validateWithModel(PositiveNumModel, 0)
    resultToPOJO(errZeroInput).ok.should.eql(false)
    resultToPOJO(errZeroInput).errMsgs.should.eql(['PositiveNumber: Value must be > 0 (got: 0)'])
    const errStringInput = validateWithModel(PositiveNumModel, 'foo')
    resultToPOJO(errStringInput).ok.should.eql(false)
    resultToPOJO(errStringInput).errMsgs.should.eql(['PositiveNumber: expecting Number, got String "foo"'])
    // function is curried, call with just 1 argument to return a more specific validation function
    const validatePositiveNumber = validateWithModel(PositiveNumModel)
    validatePositiveNumber(42).inspect().should.eql('Ok 42')
    resultToPOJO(validatePositiveNumber(0)).ok.should.eql(false)
    resultToPOJO(validatePositiveNumber('foo')).ok.should.eql(false)
  })
})
