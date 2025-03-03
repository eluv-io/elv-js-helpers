// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const NonNegativeNumModel = TH.requireSrcFile('Model/NonNegativeNumModel')

describe('NonNegativeNumModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    NonNegativeNumModel(42).should.eql(42)
    NonNegativeNumModel(0).should.eql(0)
    TH.expect(() => NonNegativeNumModel(-1)).to.throw('Value must be >= 0 (got: -1)')
    TH.expect(() => NonNegativeNumModel('foo')).to.throw('expecting Number, got String "foo"')
    NonNegativeNumModel(Infinity).should.eql(Infinity)
    TH.expect(() => NonNegativeNumModel(-Infinity)).to.throw('Value must be >= 0 (got: -Infinity)')
  })
})
