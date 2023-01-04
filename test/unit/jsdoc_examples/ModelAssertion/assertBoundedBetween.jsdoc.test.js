// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const assertBoundedBetween = TH.requireSrcFile('ModelAssertion/assertBoundedBetween')

describe('assertBoundedBetween JSDoc example', () => {
  it('should execute correctly as described', () => {
    const compare = TH.requireSrcFile('Functional/compare')
    const IntegerModel = TH.requireSrcFile('Model/IntegerModel')
    // Note use of spread operator (...) to unpack the array returned by assertBoundedBetween()
    const CartonEggCountModel = IntegerModel.extend()
      .assert(...assertBoundedBetween(IntegerModel, 0, 12, true, true, compare))
      .as('CartonEggCount')
    CartonEggCountModel(0).should.eql(0)
    CartonEggCountModel(6).should.eql(6)
    CartonEggCountModel(12).should.eql(12)
    TH.expect(() => CartonEggCountModel(42)).to.throw('Value must be >= 0 and <= 12 (got: 42)')
    TH.expect(() => CartonEggCountModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
