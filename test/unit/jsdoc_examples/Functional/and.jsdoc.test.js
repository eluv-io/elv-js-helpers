// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const and = TH.requireSrcFile('Functional/and')

describe('and JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const isEven = x => x % 2 === 0
    const isNegative = x => x < 0
    const isNegEven = and(isEven, isNegative)
    isNegEven(3).should.eql(false)
    isNegEven(2).should.eql(false)
    isNegEven(-2).should.eql(true)
  })
})
