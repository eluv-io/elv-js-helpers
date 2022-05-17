// unit test for constant.js

const chai = require('chai')
chai.should()

const constant = require('../../../../src/Functional/constant')

describe('constant', () => {

  it('should work as expected', () => {
    const always42 = constant(42)
    always42().should.equal(42)
  })
})
