// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const isFraction = TH.requireSrcFile('Boolean/isFraction')

describe('isFraction JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const fraction = TH.requireSrcFile('Conversion/fraction')
    const twoOverOne = fraction('2')
    const sortOfPi = fraction('22/7')
    isFraction(twoOverOne).should.eql(true)
    isFraction(sortOfPi).should.eql(true)
    isFraction(22 / 7).should.eql(false)
    isFraction(Infinity).should.eql(false)
    isFraction(NaN).should.eql(false)
    isFraction('foo').should.eql(false)
  })
})
