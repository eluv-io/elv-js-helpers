// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const assertionErrMsg = TH.requireSrcFile('ModelAssertion/assertionErrMsg')

describe('assertionErrMsg JSDoc example', () => {
  it('should execute correctly as described', () => {
    const NumberModel = TH.requireSrcFile('Model/NumberModel')
    const AnswerToEverythingModel = NumberModel.extend()
      .assert(x => x === 42, assertionErrMsg('must equal 42'))
      .as('AnswerToEverything')
    TH.expect(() => AnswerToEverythingModel(43)).to.throw('Value must equal 42 (got: 43)')
  })
})
