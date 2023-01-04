// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const NonNegativeIntModel = TH.requireSrcFile('Model/NonNegativeIntModel')

describe('NonNegativeIntModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    NonNegativeIntModel(42).should.eql(42)
    NonNegativeIntModel(0).should.eql(0)
    TH.expect(() => NonNegativeIntModel(4.2)).to.throw('Value must be an integer (got: 4.2)')
    TH.expect(() => NonNegativeIntModel(-1)).to.throw('Value must be >= 0 (got: -1)')
    TH.expect(() => NonNegativeIntModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
