// noinspection JSValidateTypes

const chai = require('chai')
chai.should()

const equals = require('@eluvio/ramda-fork/src/equals')

const assertAfterCheck = require('../../../../src/ModelAssertion/assertAfterCheck')
const checkVsModel = require('../../../../src/Boolean/passesModelCheck')
const StringModel = require('../../../../src/Model/StringModel')

const objBadKey = require('../../../../src/Validation/objBadKey')

describe('objBadKey', () => {

  const ThreeCharStringModel = StringModel.extend()
    .assert(
      ...assertAfterCheck(
        checkVsModel(StringModel),
        x => x.length === 3,
        'string must be 3 characters long'
      )
    ).as('ThreeCharString')

  it('should returned undefined for good objects', () => {
    equals(
      objBadKey(ThreeCharStringModel, {'foo': 1}),
      undefined
    ).should.be.true
  })
})
