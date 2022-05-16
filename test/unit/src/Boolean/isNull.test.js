// unit test for isNull.js

const chai = require('chai')
chai.should()

const isNull = require('../../../../src/Boolean/isNull')

describe('isNull', () => {

  it('should work as expected', () => {
    isNull(null).should.be.true
    isNull().should.be.false
    isNull(undefined).should.be.false
    isNull(0).should.be.false
    isNull(1, null, null).should.be.false
    isNull('foo').should.be.false
    isNull(null, 1, 2).should.be.true

  })
})
