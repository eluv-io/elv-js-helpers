// unit test for isString.js

const chai = require('chai')
chai.should()

const isString = require('../../../../src/Boolean/isString')

describe('isString', () => {
  it('should work as expected', () => {
    isString([1, 2, 3]).should.be.false
    isString(1, 'foo', 'bar').should.be.false
    isString('foo').should.be.true
    isString('foo', 3).should.be.true
  })
})
