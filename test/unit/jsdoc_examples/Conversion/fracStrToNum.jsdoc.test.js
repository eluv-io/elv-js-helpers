// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const fracStrToNum = TH.requireSrcFile('Conversion/fracStrToNum')

describe('fracStrToNum JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    fracStrToNum('1').should.eql(1)
    fracStrToNum('1/2').should.eql(0.5)
    TH.expect(() => fracStrToNum(9)).to.throw('expecting String, got Number 9')
    TH.expect(() => fracStrToNum('1/0')).to.throw(
      'Value must be a string in the form of a whole number or a fraction (got: "1/0")'
    )
    fracStrToNum('0/1').should.eql(0)
  })
})
