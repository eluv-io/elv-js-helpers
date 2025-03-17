// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const find = TH.requireSrcFile('Functional/find')

describe('find JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const isGTE = TH.requireSrcFile('Boolean/isGTE')
    const arrOfInt = [1, 2, 3, 4, 5]
    const isEven = a => a % 2 === 0
    const gte10 = isGTE(10)
    find(isEven, arrOfInt).should.eql(2)
    TH.chai.assert.deepEqual(find(gte10, arrOfInt), undefined)
    // Function is curried, call with fewer arguments to get a new, more specific function
    const isOdd = a => a % 2 === 1
    const firstOdd = find(isOdd)
    firstOdd(arrOfInt).should.eql(1)
  })
})
