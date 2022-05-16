// unit test for passesObjKeyCheck.js

const chai = require('chai')
chai.should()

const passesObjKeyCheck = require('../../../../src/Boolean/passesObjKeyCheck')

const NonBlankStrModel = require('../../../../src/Model/NonBlankStrModel')

describe('passesObjKeyCheck', () => {
  it('should ', () => {
    passesObjKeyCheck(NonBlankStrModel, {' ': 42}).should.be.false
    passesObjKeyCheck(NonBlankStrModel, {'foo': 42}).should.be.true
    passesObjKeyCheck(NonBlankStrModel, 3).should.be.true // test input not an object, check skipped
  })

  it('should be curried', () => {
    const hasNoBlankKeys = passesObjKeyCheck(NonBlankStrModel)
    hasNoBlankKeys({' ': 42}).should.be.false
    hasNoBlankKeys({'foo': 42}).should.be.true
    hasNoBlankKeys(3).should.be.true // test input not an object, check skipped
  })
})
