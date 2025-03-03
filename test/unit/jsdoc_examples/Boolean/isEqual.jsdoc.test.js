// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const isEqual = TH.requireSrcFile('Boolean/isEqual')

describe('isEqual JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    isEqual(42, 42).should.eql(true)
    isEqual(42, '42').should.eql(false)
    isEqual([1], [1]).should.eql(false)
    // function is curried: can call with fewer params to obtain a more specific function:
    const equals42 = isEqual(42)
    equals42(0).should.eql(false)
    equals42(42).should.eql(true)
  })
})
