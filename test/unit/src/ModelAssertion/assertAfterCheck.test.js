const TH = require('../../../test-helpers')
const assertAfterCheck = TH.requireSrcFile('ModelAssertion/assertAfterCheck')

describe('assertAfterCheck', () => {

  const NumberModel = TH.requireSrcFile('Model/NumberModel')
  const passesModelCheck = TH.requireSrcFile('Boolean/passesModelCheck')

  const [assertEvenNumberFn, assertEvenErrMsgFn] =
    assertAfterCheck(
      passesModelCheck(NumberModel),
      x => x % 2 === 0,
      'must be an even number'
    )

  it('should generate an assertion that returns true for good values', () => {
    assertEvenNumberFn(0).should.be.true
    assertEvenNumberFn(2).should.be.true
    assertEvenNumberFn(-2).should.be.true
  })

  it('should generate an assertion that returns false for bad values that are still instances of the underlying Model', () => {
    assertEvenNumberFn(-1).should.be.false
    assertEvenNumberFn(1.5).should.be.false
    assertEvenNumberFn(1).should.be.false
  })

  it('should generate an assertion that returns true for values that are not instances of the underlying Model', () => {
    assertEvenNumberFn([1]).should.be.true
    assertEvenNumberFn('a').should.be.true
    assertEvenNumberFn(null).should.be.true
    assertEvenNumberFn(undefined).should.be.true
  })

  it('should generate an assertion error message function that returns message with bad value and (if available) attribute name', () => {
    assertEvenErrMsgFn(false, 1, null).should.equal('Value must be an even number (got: 1)')
    assertEvenErrMsgFn(false, 1, 'pixelWidth').should.equal('pixelWidth must be an even number (got: 1)')
  })
})
