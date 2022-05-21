// unit test for assertObjKeysValid.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const equals = require('ramda/src/equals')

const assertObjKeysValid = require('../../../../src/ModelAssertion/assertObjKeysValid')

const NonBlankStrModel = require('../../../../src/Model/NonBlankStrModel')

const defBasicModel = require('../../../../src/ModelFactory/defBasicModel')

describe('assertObjKeysValid', () => {

  it('should work as expected', () => {
    const NoBlankKeysObjModel = defBasicModel('NoBlankKeysObj', Object)
      .extend()
      .assert(...assertObjKeysValid(NonBlankStrModel))

    equals(NoBlankKeysObjModel({foo: 3}), {foo:3}).should.be.true

    expect(()=>NoBlankKeysObjModel({'  ': 3})).to.throw('invalid property name "  " (is not a valid NonBlankString)')

    const AnyKeyModel = defBasicModel('AnyKey', Object)
      .extend()
      .assert(...assertObjKeysValid(null))

    equals(AnyKeyModel({foo: 3}), {foo:3}).should.be.true
    equals(AnyKeyModel({'  ': 3}), {'  ':3}).should.be.true
  })
})
