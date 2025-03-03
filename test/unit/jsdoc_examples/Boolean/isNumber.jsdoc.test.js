// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const isNumber = TH.requireSrcFile('Boolean/isNumber')

describe('isNumber JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    isNumber(1).should.eql(true)
    isNumber(Infinity).should.eql(true)
    isNumber(NaN).should.eql(true)
    isNumber('foo').should.eql(false)
  })
})
