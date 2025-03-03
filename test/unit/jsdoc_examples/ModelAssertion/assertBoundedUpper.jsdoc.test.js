// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const assertBoundedUpper = TH.requireSrcFile('ModelAssertion/assertBoundedUpper')

describe('assertBoundedUpper JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const compare = TH.requireSrcFile('Functional/compare')
    const IntegerModel = TH.requireSrcFile('Model/IntegerModel')
    // Note use of spread operator (...) to unpack the array returned by assertBoundedUpper()
    const NegativeIntegerModel = IntegerModel.extend()
      .assert(...assertBoundedUpper(IntegerModel, 0, false, compare))
      .as('NegativeInteger')
    NegativeIntegerModel(-1).should.eql(-1)
    TH.expect(() => NegativeIntegerModel(0)).to.throw('Value must be < 0 (got: 0)')
    TH.expect(() => NegativeIntegerModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
