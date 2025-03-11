// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const fracToNum = TH.requireSrcFile('Conversion/fracToNum')

describe('fracToNum JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const fraction = TH.requireSrcFile('Conversion/fraction')
    const myFraction = fraction(4.2)
    fracToNum(myFraction).should.eql(4.2)
    const pi = fraction('22/7')
    fracToNum(pi).should.eql(3.142857142857143)
    TH.expect(() => fracToNum('22/7')).to.throw('Value is not a fraction.js object')
  })
})
