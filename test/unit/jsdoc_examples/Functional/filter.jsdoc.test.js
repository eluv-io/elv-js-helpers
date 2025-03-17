// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const filter = TH.requireSrcFile('Functional/filter')

describe('filter JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const arrOfInt = [1, 2, 3, 4, 5]
    const isEven = a => a % 2 === 0
    filter(isEven, arrOfInt).should.eql([2, 4])
    // Function is curried, call with fewer arguments to get a new, more specific function
    const isOdd = a => a % 2 === 1
    const filterOdd = filter(isOdd)
    filterOdd(arrOfInt).should.eql([1, 3, 5])
  })
})
