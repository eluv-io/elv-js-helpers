// unit test for satisfiesLowerBound.js

const chai = require('chai')
chai.should()

const satisfiesLowerBound = require('../../../../src/Boolean/satisfiesLowerBound')

const compare = require('../../../../src/Functional/compare')

describe('satisfiesLowerBound', () => {

  it('should work as expected', () => {
    satisfiesLowerBound(0, true, compare, 42).should.be.true
    satisfiesLowerBound(0, true, compare, 0).should.be.true
    satisfiesLowerBound(0, true, compare, -1).should.be.false
    satisfiesLowerBound(0, false, compare, 0).should.be.false
  })

  it('should be curried', () => {
    const isPositive = satisfiesLowerBound(0, false, compare)
    isPositive(-1).should.be.false
    isPositive(0).should.be.false
    isPositive(1).should.be.true
  })
})
