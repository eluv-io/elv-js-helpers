// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const neighborsPass = TH.requireSrcFile('Boolean/neighborsPass')

describe('neighborsPass JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const xGTEy = (x, y) => x <= y
    neighborsPass(xGTEy, [1, 2, 2, 3]).should.eql(true)
    // single element, has no pairs to check:
    neighborsPass(xGTEy, [1]).should.eql(true)
    neighborsPass(xGTEy, [3, 2, 2, 1]).should.eql(false)
    // strings support indexed access via []:
    neighborsPass(xGTEy, 'abcde').should.eql(true)
    // non-array, has no pairs to check:
    neighborsPass(xGTEy, 5).should.eql(true)
    // function is curried: call with 1 arg to obtain a narrower function
    const isOrdered = neighborsPass(xGTEy)
    isOrdered([1, 2, 2, 3]).should.eql(true)
    isOrdered([1]).should.eql(true)
    isOrdered([3, 2, 2, 1]).should.eql(false)
    // strings support indexed access via []:
    isOrdered('abcde').should.eql(true)
    // non-array, has no pairs to check:
    isOrdered(5).should.eql(true)
  })
})
