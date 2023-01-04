// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const _objBadKeyErrMsg = TH.requireSrcFile('ModelAssertion/_objBadKeyErrMsg')

describe('_objBadKeyErrMsg JSDoc example', () => {
  it('should execute correctly as described', () => {
    const defBasicModel = TH.requireSrcFile('ModelFactory/defBasicModel')
    const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')
    const passesModelCheck = TH.requireSrcFile('Boolean/passesModelCheck')
    const NoBlankKeysObjModel = defBasicModel('NoBlankKeysObj', Object)
      .extend()
      .assert(passesModelCheck(NonBlankStrModel), _objBadKeyErrMsg(NonBlankStrModel))
    TH.expect(() => NoBlankKeysObjModel({'  ': 3})).to.throw(
      'invalid property name "  " (is not a valid NonBlankString)'
    )
  })
})
