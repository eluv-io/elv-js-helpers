// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const PositiveNumModel = TH.requireSrcFile('Model/PositiveNumModel')

describe('PositiveNumModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    PositiveNumModel(42).should.eql(42)
    TH.expect(() => PositiveNumModel(0)).to.throw('Value must be > 0 (got: 0)')
    TH.expect(() => PositiveNumModel('foo')).to.throw('expecting Number, got String "foo"')
    PositiveNumModel(Infinity).should.eql(Infinity)
    TH.expect(() => PositiveNumModel(-Infinity)).to.throw('Value must be > 0 (got: -Infinity)')
  })
})
