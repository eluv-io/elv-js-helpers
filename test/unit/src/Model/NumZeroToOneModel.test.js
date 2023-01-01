const TH = require('../../../test-helpers')
const NumZeroToOneModel = TH.requireSrcFile('Model/NumZeroToOneModel')

describe('NumZeroToOneModel', () => {
  it('should work as expected', () => {
    NumZeroToOneModel(0) .should.equal( 0 )
    NumZeroToOneModel(0.5)  .should.equal( 0.5 )
    NumZeroToOneModel(1)    .should.equal( 1 )
    TH.expect(() => NumZeroToOneModel(42)).to.throw('Value must be >= 0 and <= 1 (got: 42)')
    TH.expect(() => NumZeroToOneModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
