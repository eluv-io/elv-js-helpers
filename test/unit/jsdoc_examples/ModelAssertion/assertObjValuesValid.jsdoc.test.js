// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const assertObjValuesValid = TH.requireSrcFile('ModelAssertion/assertObjValuesValid')

describe('assertObjValuesValid JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')
    const defBasicModel = TH.requireSrcFile('ModelFactory/defBasicModel')
    // Note use of spread operator (...) to unpack the array returned by assertObjValuesValid()
    const NoBlankStringValsObjModel = defBasicModel('NoBlankStringValsObj', Object)
      .extend()
      .assert(...assertObjValuesValid(NonBlankStrModel))
    TH.expect(() => NoBlankStringValsObjModel({foo: '  '})).to.throw(
      'key "foo" points to a value that is an invalid NonBlankString (NonBlankString: Value must not be a blank string (got: "  "))'
    )
  })
})
