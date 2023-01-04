// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const assertBoundedLower = TH.requireSrcFile('ModelAssertion/assertBoundedLower')

describe('assertBoundedLower JSDoc example', () => {
  it('should execute correctly as described', () => {
    const compare = TH.requireSrcFile('Functional/compare')
    const IntegerModel = TH.requireSrcFile('Model/IntegerModel')
    // Note use of spread operator (...) to unpack the array returned by assertBoundedLower()
    const PositiveIntegerModel = IntegerModel.extend()
      .assert(...assertBoundedLower(IntegerModel, 0, false, compare))
      .as('PositiveInteger')
    PositiveIntegerModel(1).should.eql(1)
    TH.expect(() => PositiveIntegerModel(0)).to.throw('Value must be > 0 (got: 0)')
    TH.expect(() => PositiveIntegerModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
