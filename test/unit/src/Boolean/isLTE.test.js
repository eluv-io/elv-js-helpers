// unit test for isLTE.js

const chai = require('chai')
chai.should()
const expect = chai.expect
require('mocha-sinon')

const isLTE = require('../../../../src/Boolean/isLTE')

describe('isLTE', () => {
  it('should have a correct example in JSDoc', function () {
    isLTE(42, 1).should.eql(true)
    isLTE(1, 42).should.eql(false)
    isLTE(42, 42).should.eql(true)
    isLTE(null, undefined).should.eql(false)
    isLTE(undefined, null).should.eql(false)
    // function is curried: can call with fewer params to obtain a narrower function
    const notPositive = isLTE(0)
    notPositive(-1).should.eql(true)
    notPositive(0).should.eql(true)
    notPositive(1).should.eql(false)
  })

  // it('should... ', function() {
  //
  // })
})
