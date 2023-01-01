const TH = require('../../../test-helpers')
const PositiveNumModel = TH.requireSrcFile('Model/PositiveNumModel')

describe('PositiveNumModel', () => {
  it('should work as expected', () => {
    PositiveNumModel(42).should.equal(42)
    TH.expect(() => PositiveNumModel(0)).to.throw('Value must be > 0 (got: 0)')
    TH.expect(() => PositiveNumModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
