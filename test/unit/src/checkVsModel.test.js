// noinspection JSValidateTypes

const chai = require('chai')
chai.should()
// const expect = chai.expect

const checkVsModel = require('../../../src/checkVsModel')
const StringModel = require('../../../src/StringModel')
const _assertWithPreCheck = require('../../../src/internal/_assertWithPrecheck')

describe('checkVsModel', () => {

  const ThreeCharStringModel = StringModel.extend().assert(
    ..._assertWithPreCheck(StringModel, x=>x.length===3,'string must be 3 characters long' )
  ).as('ThreeCharString')

  it('should return true good input', () => {
    checkVsModel(ThreeCharStringModel, 'foo').should.be.true
  })

  it('should return false for bad input', () => {
    checkVsModel(ThreeCharStringModel, 'foobar').should.be.false
    checkVsModel(ThreeCharStringModel, 3).should.be.false
  })

})
