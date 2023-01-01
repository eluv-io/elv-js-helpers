const TH = require('../../../test-helpers')
const assertBoundedLower = TH.requireSrcFile('ModelAssertion/assertBoundedLower')

const compare = TH.requireSrcFile('Functional/compare')
const NumberModel = TH.requireSrcFile('Model/NumberModel')

describe('assertBoundedLower', () => {

  const [assertPositiveNumberFn, assertPositiveErrMsgFn] =
    assertBoundedLower(NumberModel, 0, false, compare)

  it('should generate an assertion that returns true for good values', () => {
    assertPositiveNumberFn(1).should.be.true
    assertPositiveNumberFn(1.5).should.be.true
    assertPositiveNumberFn(Infinity).should.be.true
  })

  it('should generate an assertion that returns false for bad values that are still instances of the underlying Model', () => {
    assertPositiveNumberFn(-Infinity).should.be.false
    assertPositiveNumberFn(-1).should.be.false
    assertPositiveNumberFn(0).should.be.false
  })

  it('should generate an assertion that returns true for values that are not instances of the underlying Model', () => {
    assertPositiveNumberFn([1]).should.be.true
    assertPositiveNumberFn('a').should.be.true
    assertPositiveNumberFn(null).should.be.true
    assertPositiveNumberFn(undefined).should.be.true
  })

  it('should generate an assertion error message function that returns message with bad value and (if available) attribute name', () => {
    assertPositiveErrMsgFn(false, 0, null).should.equal('Value must be > 0 (got: 0)')
    assertPositiveErrMsgFn(false, -1, 'pixelWidth').should.equal('pixelWidth must be > 0 (got: -1)')
  })
})
