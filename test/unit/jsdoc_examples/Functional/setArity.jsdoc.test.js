// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const setArity = TH.requireSrcFile('Functional/setArity')

describe('setArity JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const maxOfThree = setArity(3, Math.max)
    // creates partially applied function with 1 argument applied (waiting for 2 more):
    const maxNeedTwoMore = maxOfThree(42)
    // creates partially applied function with 2 arguments applied (waiting for 1 more):
    const maxNeedOneMore = maxNeedTwoMore(0)
    maxNeedOneMore(-42).should.eql(42)
  })
})
