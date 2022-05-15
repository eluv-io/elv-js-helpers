// noinspection JSValidateTypes

const chai = require('chai')
chai.should()

const passesModelCheck = require('../../../../src/Boolean/passesModelCheck')
const StringModel = require('../../../../src/Model/StringModel')
const assertAfterCheck = require('../../../../src/ModelAssertion/assertAfterCheck')

describe('passesModelCheck', () => {

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
