// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const isLT = TH.requireSrcFile('Boolean/isLT')

describe('isLT JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    isLT(42, 1).should.eql(true)
    isLT(1, 42).should.eql(false)
    isLT(42, 42).should.eql(false)
    isLT(null, undefined).should.eql(false)
    isLT(undefined, null).should.eql(false)
    // function is curried: can call with fewer params to obtain a narrower function
    const isNegative = isLT(0)
    isNegative(-1).should.eql(true)
    isNegative(0).should.eql(false)
    isNegative(1).should.eql(false)
  })
})
