// unit test for _objBadValErrMsg.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const _objBadValErrMsg = require('../../../../src/ModelAssertion/_objBadValErrMsg')

const passesModelCheck = require('../../../../src/Boolean/passesModelCheck')

const NonBlankStrModel = require('../../../../src/Model/NonBlankStrModel')

const defBasicModel = require('../../../../src/ModelFactory/defBasicModel')

describe('_objBadValErrMsg', () => {
  it('should work as expected', () => {
    const NoBlankValuesObjModel = defBasicModel('NoBlankValuesObj', Object).extend()
      .assert(
        passesModelCheck(NonBlankStrModel),
        _objBadValErrMsg(NonBlankStrModel)
      )
    expect(() => NoBlankValuesObjModel({foo: '  '})).to.throw( 'key \'foo\' points to a value that is an invalid NonBlankString (NonBlankString: Value must not be a blank string (got: "  "))')
  })
})
