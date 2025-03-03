// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const ifElse = TH.requireSrcFile('Functional/ifElse')

describe('ifElse JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const isEven = x => x % 2 === 0
    const half = x => x / 2
    const triplePlusOne = x => 3 * x + 1
    const collatz = ifElse(isEven, half, triplePlusOne)
    collatz(3).should.eql(10)
    collatz(10).should.eql(5)
  })
})
