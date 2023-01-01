// unit test for isLT.js

const chai = require('chai')
chai.should()
const expect = chai.expect
require('mocha-sinon')

const isLT = require('../../../../src/Boolean/isLT')

describe('isLT', () => {
  it('should have a correct example in JSDoc', function () {
    isLT(42, 1).should.eql(true)
    isLT(1, 42).should.eql(false)
    isLT(42, 42).should.eql(false)
    isLT(null, undefined).should.eql(false)
    isLT(undefined, null).should.eql(false)
    // function is curried: can call with fewer params to obtain a narrower function
    const isNegative = isLT(0)
    isNegative(-1).should.eql(true)
    isNegative(0).should.eql(false)
    isNegative(1).should.eql(false)
  })

  // it('should... ', function() {
  //
  // })
})
