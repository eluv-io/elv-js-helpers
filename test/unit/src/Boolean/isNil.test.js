// unit test for isNil.js

const chai = require('chai')
chai.should()
const expect = chai.expect
require('mocha-sinon')

const isNil = require('../../../../src/Boolean/isNil')

describe('isNil', () => {
  it('should have a correct example in JSDoc', function () {
    isNil().should.eql(true)
    isNil(undefined).should.eql(true)
    isNil(null).should.eql(true)
    isNil(42).should.eql(false)
    // extra argument ignored:
    isNil(42, undefined).should.eql(false)
    // extra argument ignored:
    isNil(undefined, 42).should.eql(true)
  })

  // it('should... ', function() {
  //
  // })
})
