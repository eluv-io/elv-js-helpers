const TH = require('../../../test-helpers')
const _objBadKeyErrMsg = TH.requireSrcFile('ModelAssertion/_objBadKeyErrMsg')

const passesModelCheck = TH.requireSrcFile('Boolean/passesModelCheck')

const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')

const defBasicModel = TH.requireSrcFile('ModelFactory/defBasicModel')

describe('_objBadKeyErrMsg', () => {
  it('should work as expected', () => {
    const NoBlankKeysObjModel = defBasicModel('NoBlankKeysObj', Object).extend()
      .assert(
        passesModelCheck(NonBlankStrModel),
        _objBadKeyErrMsg(NonBlankStrModel)
      )
    TH.expect(() => NoBlankKeysObjModel({'  ': 3})).to.throw('invalid property name "  " (is not a valid NonBlankString)')
  })
})
