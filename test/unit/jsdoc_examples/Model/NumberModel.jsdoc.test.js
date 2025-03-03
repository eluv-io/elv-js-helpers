// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const NumberModel = TH.requireSrcFile('Model/NumberModel')

describe('NumberModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    NumberModel(42).should.eql(42)
    TH.expect(() => NumberModel('foo')).to.throw('expecting Number, got String "foo"')
    NumberModel(Infinity).should.eql(Infinity)
    NumberModel(-Infinity).should.eql(-Infinity)
    // Error message for NaN is not the greatest:
    TH.expect(() => NumberModel(NaN)).to.throw('expecting Number, got Number NaN')
  })
})
