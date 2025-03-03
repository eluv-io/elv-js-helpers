// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const NumZeroToOneModel = TH.requireSrcFile('Model/NumZeroToOneModel')

describe('NumZeroToOneModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    NumZeroToOneModel(0).should.eql(0)
    NumZeroToOneModel(0.5).should.eql(0.5)
    NumZeroToOneModel(1).should.eql(1)
    TH.expect(() => NumZeroToOneModel(42)).to.throw('Value must be >= 0 and <= 1 (got: 42)')
    TH.expect(() => NumZeroToOneModel('foo')).to.throw('expecting Number, got String "foo"')
  })
})
