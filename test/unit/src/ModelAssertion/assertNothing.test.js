// unit test for assertNothing.js

const chai = require('chai')
chai.should()

const assertNothing = require('../../../../src/ModelAssertion/assertNothing')

describe('assertNothing', () => {
  it('should work as expected', () => {
    assertNothing()[0]().should.be.true
    assertNothing()[1].should.equal( '')
  })
})
