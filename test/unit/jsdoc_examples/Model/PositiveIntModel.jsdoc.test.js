// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const PositiveIntModel = TH.requireSrcFile('Model/PositiveIntModel')

describe('PositiveIntModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    PositiveIntModel(42).should.eql(42)
    TH.expect(() => PositiveIntModel(0)).to.throw('Value must be > 0 (got: 0)')
    TH.expect(() => PositiveIntModel(4.2)).to.throw('Value must be an integer (got: 4.2)')
    TH.expect(() => PositiveIntModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
