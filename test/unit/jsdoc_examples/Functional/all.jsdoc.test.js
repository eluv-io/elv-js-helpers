// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const all = TH.requireSrcFile('Functional/all')

describe('all JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const isNumber = TH.requireSrcFile('Boolean/isNumber')
    all(isNumber, [1, 2, 3, 4, 5]).should.eql(true)
    all(isNumber, [1, 2, 3, 4, 'a']).should.eql(false)
    TH.expect(() => all(isNumber, null)).to.throw('Cannot read properties of null')
    TH.expect(() => all(null, [1, 2, 3])).to.throw('fn is not a function')
    // Empty array tests as true (none fail)
    all(isNumber, []).should.eql(true)
    // Function is curried, call with fewer arguments to get a new, more specific function
    const allNumber = all(isNumber)
    allNumber([1, 2, 3]).should.eql(true)
  })
})
