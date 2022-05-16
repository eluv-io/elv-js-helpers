// unit test for passesModelCheck.js

const chai = require('chai')
chai.should()

const passesModelCheck = require('../../../../src/Boolean/passesModelCheck')

const PositiveIntModel = require('../../../../src/Model/PositiveIntModel')

describe('passesModelCheck', () => {
  it('should work as expected', () => {
    passesModelCheck(PositiveIntModel, -1).should.be.false
  })

  it('should be curried', () => {
    const isPositiveInt = passesModelCheck(PositiveIntModel)
    isPositiveInt(1).should.be.true
    isPositiveInt(0).should.be.false
    isPositiveInt('foo').should.be.false
  })
})
