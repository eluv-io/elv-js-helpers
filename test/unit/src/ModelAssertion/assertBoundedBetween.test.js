const TH = require('../../../test-helpers')
const assertBoundedBetween = TH.requireSrcFile('ModelAssertion/assertBoundedBetween')

const compare = TH.requireSrcFile('Functional/compare')

const IntegerModel = TH.requireSrcFile('Model/IntegerModel')

describe('assertBoundedBetween', () => {

  it('should work as expected', () => {
    const CartonEggCountModel = IntegerModel
      .extend()
      .assert(
        ...assertBoundedBetween(
          IntegerModel,
          0,
          12,
          true,
          true,
          compare
        )
      )
      .as('CartonEggCount')

    CartonEggCountModel(0).should.equal(0)
    CartonEggCountModel(6).should.equal(6)
    CartonEggCountModel(12).should.equal(12)
    TH.expect(() => CartonEggCountModel(42)).throw('Value must be >= 0 and <= 12 (got: 42)')
    TH.expect(() => CartonEggCountModel('foo')).throw('expecting Number, got String "foo"')
  })
})
