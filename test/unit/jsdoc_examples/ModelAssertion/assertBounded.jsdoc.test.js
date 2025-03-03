// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const assertBounded = TH.requireSrcFile('ModelAssertion/assertBounded')

describe('assertBounded JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const NumberModel = TH.requireSrcFile('Model/NumberModel')
    // Note use of spread operator (...) to unpack the array returned by assertBounded()
    const NumberBetweenZeroAndOneModel = NumberModel.extend()
      .assert(...assertBounded(NumberModel, 0, 1, true, true))
      .as('NumberBetweenZeroAndOne')
    TH.expect(() => NumberBetweenZeroAndOneModel(-1)).to.throw('Value must be >= 0 and <= 1 (got: -1)')
    NumberBetweenZeroAndOneModel(0).should.eql(0)
    NumberBetweenZeroAndOneModel(0.5).should.eql(0.5)
    NumberBetweenZeroAndOneModel(1).should.eql(1)
    TH.expect(() => NumberBetweenZeroAndOneModel(42)).to.throw('Value must be >= 0 and <= 1 (got: 42)')
  })
})
