const TH = require('../../../test-helpers')
const fraction = TH.requireSrcFile('Conversion/fraction')

describe('fraction', () => {

  it('should work as expected', () => {
    fraction(4.2).toFraction(true).should.equal('4 1/5')
    TH.expect(()=>fraction('foo')).to.throw('Invalid argument')
    TH.expect(()=>fraction('1/0')).to.throw('Division by Zero')
    fraction('22/7').valueOf().should.equal(3.142857142857143)
    fraction('-22/7').s.should.equal(-1)
    fraction('-22/7').n.should.equal(22)
    fraction('-22/7').d.should.equal(7)
    fraction('9 3/4').valueOf().should.equal(9.75)
  })
})
