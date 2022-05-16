// unit test for fraction.js

const chai = require('chai')
chai.should()

const fraction = require('../../../../src/Conversion/fraction')

describe('fraction', () => {

  it('should work as expected', () => {
    fraction(4.2).toFraction(true).should.equal('4 1/5')
    fraction('22/7').valueOf().should.equal(3.142857142857143)
    fraction('-22/7').s.should.equal(-1)
    fraction('-22/7').n.should.equal(22)
    fraction('-22/7').d.should.equal(7)
    fraction('9 3/4').valueOf().should.equal(9.75)
  })
})
