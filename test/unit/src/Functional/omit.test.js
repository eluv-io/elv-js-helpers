// unit test for omit.js

const chai = require('chai')
chai.should()
const expect = chai.expect
require('mocha-sinon')

const omit = require('../../../../src/Functional/omit')

describe('omit', () => {
  it('should have a correct example in JSDoc', function () {
    const myObject = {foo: 'f', bar: 'b'}
    omit(['foo'], myObject).should.eql({bar: 'b'})
  })

  // it('should... ', function() {
  //
  // })
})
