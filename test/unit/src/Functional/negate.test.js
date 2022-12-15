// unit test for negate.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const negate = require('../../../../src/Functional/negate')
const isEmpty = a => a.length === 0

describe('negate', () => {

  it('should work as expected', () => {
    const isNotEmpty = negate(isEmpty)
    isNotEmpty('foo').should.be.true
    isNotEmpty('').should.be.false
    isNotEmpty([]).should.be.false
    isNotEmpty([1, 2, 3]).should.be.true
    expect(() => isNotEmpty(undefined)).to.throw('Cannot read properties of undefined (reading \'length\')')
  })
})
