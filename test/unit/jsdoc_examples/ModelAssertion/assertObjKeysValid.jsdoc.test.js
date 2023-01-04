// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const assertObjKeysValid = TH.requireSrcFile('ModelAssertion/assertObjKeysValid')

describe('assertObjKeysValid JSDoc example', () => {
  it('should execute correctly as described', () => {
    const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')
    const defBasicModel = TH.requireSrcFile('ModelFactory/defBasicModel')
    // Note use of spread operator (...) to unpack the array returned by assertObjKeysValid()
    const NoBlankKeysObjModel = defBasicModel('NoBlankKeysObj', Object)
      .extend()
      .assert(...assertObjKeysValid(NonBlankStrModel))
    TH.expect(() => NoBlankKeysObjModel({'  ': 3})).to.throw(
      'invalid property name "  " (is not a valid NonBlankString)'
    )
  })
})
