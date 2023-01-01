const TH = require('../../../test-helpers')
const assertBoundedUpper = TH.requireSrcFile('ModelAssertion/assertBoundedUpper')

const compare = TH.requireSrcFile('Functional/compare')

const IntegerModel = TH.requireSrcFile('Model/IntegerModel')

describe('assertBoundedUpper', () => {
  it('should work as expected', () => {
    const NegativeIntegerModel = IntegerModel
      .extend()
      .assert(
        ...assertBoundedUpper(
          IntegerModel,
          0,
          false,
          compare
        )
      )
      .as('NegativeInteger')

    NegativeIntegerModel(-1).should.equal(-1)
    TH.expect(()=>NegativeIntegerModel(0)).to.throw('Value must be < 0 (got: 0)')
    TH.expect(()=>NegativeIntegerModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
