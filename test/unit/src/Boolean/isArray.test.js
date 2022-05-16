// unit test for isArray.js

const chai = require('chai')
chai.should()

const isArray = require('../../../../src/Boolean/isArray')

describe('isArray', () => {

  it('should work as expected', () => {
    isArray([1, 2, 3]).should.be.true
    isArray(1, 2, 3).should.be.false
    isArray('foo').should.be.false
  })

})
