const TH = require('../../../test-helpers')
const _objBadValErrMsg = TH.requireSrcFile('ModelAssertion/_objBadValErrMsg')

describe('_objBadValErrMsg', () => {

  const defBasicModel = TH.requireSrcFile('ModelFactory/defBasicModel')
  const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')
  const passesModelCheck = TH.requireSrcFile('Boolean/passesModelCheck')

  it('should work as expected', () => {
    const NoBlankValuesObjModel = defBasicModel('NoBlankValuesObj', Object).extend()
      .assert(
        passesModelCheck(NonBlankStrModel),
        _objBadValErrMsg(NonBlankStrModel)
      )
    TH.expect(() => NoBlankValuesObjModel({foo: '  '})).to.throw( 'key "foo" points to a value that is an invalid NonBlankString (NonBlankString: Value must not be a blank string (got: "  "))')
  })
})
