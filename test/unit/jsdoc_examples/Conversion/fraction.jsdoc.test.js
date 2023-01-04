// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const fraction = TH.requireSrcFile('Conversion/fraction')

describe('fraction JSDoc example', () => {
  it('should execute correctly as described', () => {
    fraction(4.2).toFraction(true).should.eql('4 1/5')
    TH.expect(() => fraction('foo').toFraction(true)).to.throw('Invalid argument')
    TH.expect(() => fraction('1/0').toFraction(true)).to.throw('Division by Zero')
    fraction(4.2).toFraction(true).should.eql('4 1/5')
    fraction('22/7').valueOf().should.eql(3.142857142857143)
    // .s returns sign:
    fraction('-22/7').s.should.eql(-1)
    // .n returns numerator
    fraction('-22/7').n.should.eql(22)
    // .d returns denominator
    fraction('-22/7').d.should.eql(7)
    fraction('9 3/4').valueOf().should.eql(9.75)
  })
})
