// unit test for _objBadKeyErrMsg.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const _objBadKeyErrMsg = require('../../../../src/ModelAssertion/_objBadKeyErrMsg')

const passesModelCheck = require('../../../../src/Boolean/passesModelCheck')

const NonBlankStrModel = require('../../../../src/Model/NonBlankStrModel')

const defBasicModel = require('../../../../src/ModelFactory/defBasicModel')

describe('_objBadKeyErrMsg', () => {
  it('should work as expected', () => {
    const NoBlankKeysObjModel = defBasicModel('NoBlankKeysObj', Object).extend()
      .assert(
        passesModelCheck(NonBlankStrModel),
        _objBadKeyErrMsg(NonBlankStrModel)
      )
    expect(() => NoBlankKeysObjModel({'  ': 3})).to.throw('invalid property name \'  \' (is not a valid NonBlankString)')
  })
})
