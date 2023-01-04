// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const NumZeroToOneXModel = TH.requireSrcFile('Model/NumZeroToOneXModel')

describe('NumZeroToOneXModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    NumZeroToOneXModel(0).should.eql(0)
    NumZeroToOneXModel(0.5).should.eql(0.5)
    TH.expect(() => NumZeroToOneXModel(1)).to.throw('Value must be >= 0 and < 1 (got: 1)')
    TH.expect(() => NumZeroToOneXModel(42)).to.throw('Value must be >= 0 and < 1 (got: 42)')
    TH.expect(() => NumZeroToOneXModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
