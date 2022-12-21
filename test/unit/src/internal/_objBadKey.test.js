// noinspection JSValidateTypes

const chai = require('chai')
chai.should()
// const expect = chai.expect

const equals = require('@eluvio/ramda-fork/src/equals')

const _assertWithPreCheck = require('../../../../src/internal/_assertWithPrecheck')
const _objBadKey = require('../../../../src/internal/_objBadKey')
const checkVsModel = require('../../../../src/checkVsModel')
const StringModel = require('../../../../src/StringModel')

describe('_objBadKey', () => {

  const ThreeCharStringModel = StringModel.extend()
    .assert(
      ..._assertWithPreCheck(
        checkVsModel(StringModel),
        x => x.length === 3,
        'string must be 3 characters long'
      )
    ).as('ThreeCharString')

  it('should returned undefined for good objects', () => {
    equals(
      _objBadKey(ThreeCharStringModel, {'foo': 1}),
      undefined
    ).should.be.true
  })
})
