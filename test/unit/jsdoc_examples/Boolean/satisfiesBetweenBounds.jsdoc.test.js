// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const satisfiesBetweenBounds = TH.requireSrcFile('Boolean/satisfiesBetweenBounds')

describe('satisfiesBetweenBounds JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const compare = TH.requireSrcFile('Functional/compare')
    satisfiesBetweenBounds(0, 42, true, true, compare, 42).should.eql(true)
    satisfiesBetweenBounds(0, 42, true, true, compare, 0).should.eql(true)
    satisfiesBetweenBounds(0, 42, true, true, compare, -1).should.eql(false)
    satisfiesBetweenBounds(0, 42, false, false, compare, 0).should.eql(false)
    // function is curried: call with fewer params to obtain a narrower function
    const isFromZeroToOne = satisfiesBetweenBounds(0, 1, true, true, compare)
    isFromZeroToOne(0.5).should.eql(true)
    isFromZeroToOne(1).should.eql(true)
    isFromZeroToOne(1.5).should.eql(false)
  })
})
