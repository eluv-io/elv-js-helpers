const TH = require('../../../test-helpers')
const PositiveIntModel = TH.requireSrcFile('Model/PositiveIntModel')

describe('PositiveIntModel', () => {
  it('should work as expected', () => {
    PositiveIntModel(42).should.equal(42)
    TH.expect(() => PositiveIntModel(0)).to.throw('Value must be > 0 (got: 0)')
    TH.expect(() => PositiveIntModel(4.2)).to.throw('Value must be an integer (got: 4.2)')
    TH.expect(() => PositiveIntModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
