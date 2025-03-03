// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const or = TH.requireSrcFile('Functional/or')

describe('or JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const isEven = x => x % 2 === 0
    const isNegative = x => x < 0
    const isNegOrEven = or(isEven, isNegative)
    isNegOrEven(3).should.eql(false)
    isNegOrEven(2).should.eql(true)
    isNegOrEven(-3).should.eql(true)
  })
})
