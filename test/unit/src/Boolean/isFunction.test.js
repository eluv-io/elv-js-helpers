// unit test for isFunction.js

const chai = require('chai')
chai.should()

const isFunction = require('../../../../src/Boolean/isFunction')

describe('isFunction', () => {

  it('should work as expected', () => {
    isFunction([1, 2, 3]).should.be.false
    isFunction(1, 2, 3).should.be.false
    isFunction('foo').should.be.false
    isFunction(isFunction).should.be.true
  })

})
