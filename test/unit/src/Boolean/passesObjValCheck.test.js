// unit test for passesObjValCheck.js

const chai = require('chai')
chai.should()

const passesObjValCheck = require('../../../../src/Boolean/passesObjValCheck')

const NonBlankStrModel = require('../../../../src/Model/NonBlankStrModel')

describe('passesObjValCheck', () => {
  it('should ', () => {
    passesObjValCheck(NonBlankStrModel, {foo: ' '}).should.be.false
    passesObjValCheck(NonBlankStrModel, {foo: 'bar'}).should.be.true
    passesObjValCheck(NonBlankStrModel, {foo: 42}).should.be.false
    passesObjValCheck(NonBlankStrModel, 3).should.be.true  // test input not an object, check skipped
  })

  it('should be curried', () => {
    const allValsNonBlankString = passesObjValCheck(NonBlankStrModel)
    allValsNonBlankString({foo: ' '}).should.be.false
    allValsNonBlankString({foo: 'bar'}).should.be.true
    allValsNonBlankString({foo: 42}).should.be.false
    allValsNonBlankString(3).should.be.true // test input not an object, check skipped
  })
})
