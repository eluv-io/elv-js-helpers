// unit test for isUndefined.js

const chai = require('chai')
chai.should()

const isUndefined = require('../../../../src/Boolean/isUndefined')

describe('isUndefined', () => {

  it('should work as expected', () => {
    isUndefined().should.be.true
    isUndefined(undefined).should.be.true
    isUndefined(null).should.be.false
    isUndefined(0).should.be.false
    isUndefined(1, undefined).should.be.false
    isUndefined('foo').should.be.false
    isUndefined(undefined, 1, 2).should.be.true

  })
})
