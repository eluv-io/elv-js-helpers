// unit test for assertObjValuesValid.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const assertObjValuesValid = require('../../../../src/ModelAssertion/assertObjValuesValid')

const NonBlankStrModel = require('../../../../src/Model/NonBlankStrModel')

const defBasicModel = require('../../../../src/ModelFactory/defBasicModel')
const equals = require('ramda/src/equals')

describe('assertObjValuesValid', () => {

  it('should work as expected', () => {
    const NoBlankStringValsObjModel = defBasicModel('NoBlankStringValsObj', Object)
      .extend()
      .assert(...assertObjValuesValid(NonBlankStrModel))

    expect(()=>NoBlankStringValsObjModel({foo: '  '})).to.throw('key \'foo\' points to a value that is an invalid NonBlankString (NonBlankString: Value must not be a blank string (got: "  "))')

    const AnyValueModel = defBasicModel('AnyValue', Object)
      .extend()
      .assert(...assertObjValuesValid(null))

    equals(AnyValueModel({foo: 3}), {foo:3}).should.be.true
    equals(AnyValueModel({foo: '  '}), {foo:'  '}).should.be.true
  })
})
