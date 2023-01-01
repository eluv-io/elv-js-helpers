// unit test for isNumber.js

const chai = require('chai')
chai.should()
const expect = chai.expect
require('mocha-sinon')

const isNumber = require('../../../../src/Boolean/isNumber')

describe('isNumber', () => {
  it('should have a correct example in JSDoc', function () {
    isNumber(1).should.eql(true)
    isNumber(Infinity).should.eql(true)
    isNumber(NaN).should.eql(true)
    isNumber('foo').should.eql(false)
  })

  // it('should... ', function() {
  //
  // })
})
