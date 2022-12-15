// unit test for passesModelCheck.js

const chai = require('chai')
chai.should()

const passesModelCheck = require('../../../../src/Boolean/passesModelCheck')

const PositiveIntModel = require('../../../../src/Model/PositiveIntModel')
const StringModel = require('../../../../src/Model/StringModel')
const assertAfterCheck = require('../../../../src/ModelAssertion/assertAfterCheck')

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


  const ThreeCharStringModel = StringModel.extend().assert(
    ...assertAfterCheck(
      passesModelCheck(StringModel),
      x => x.length === 3,
      'string must be 3 characters long'
    )
  ).as('ThreeCharString')

  it('should return true good input', () => {
    passesModelCheck(ThreeCharStringModel, 'foo').should.be.true
  })

  it('should return false for bad input', () => {
    passesModelCheck(ThreeCharStringModel, 'foobar').should.be.false
    passesModelCheck(ThreeCharStringModel, 3).should.be.false
  })

})
