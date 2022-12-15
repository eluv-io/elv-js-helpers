// unit test for failsModelCheck.js

const chai = require('chai')
chai.should()

const failsModelCheck = require('../../../../src/Boolean/failsModelCheck')
const PositiveIntModel = require('../../../../src/Model/PositiveIntModel')

describe('failsModelCheck', () => {
  it('should work as expected', () => {
    failsModelCheck(PositiveIntModel, 1).should.be.false
    failsModelCheck(PositiveIntModel, -1).should.be.true
  })

  it('should be curried', () => {
    const isNotPositiveInt = failsModelCheck(PositiveIntModel)
    isNotPositiveInt(1).should.be.false
    isNotPositiveInt(0).should.be.true
    isNotPositiveInt('foo').should.be.true
  })
})
