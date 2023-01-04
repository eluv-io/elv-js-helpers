// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const defBoundedIntModel = TH.requireSrcFile('ModelFactory/defBoundedIntModel')

describe('defBoundedIntModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    const CartonEggCountModel = defBoundedIntModel('CartonEggCount', 0, 12, true, true)
    TH.expect(() => CartonEggCountModel(-1)).to.throw('Value must be >= 0 and <= 12 (got: -1)')
    CartonEggCountModel(0).should.eql(0)
    TH.expect(() => CartonEggCountModel(4.2)).to.throw('Value must be an integer (got: 4.2)')
    CartonEggCountModel(6).should.eql(6)
    TH.expect(() => CartonEggCountModel(42)).to.throw('Value must be >= 0 and <= 12 (got: 42)')
    TH.expect(() => CartonEggCountModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
