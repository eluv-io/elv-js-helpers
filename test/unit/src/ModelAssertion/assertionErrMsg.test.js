const TH = require('../../../test-helpers')
const assertionErrMsg = TH.requireSrcFile('ModelAssertion/assertionErrMsg')

describe('assertionErrMsg', () => {

  it('should return expected strings', () => {
    assertionErrMsg('is not 42')(false, 10, null)
      .should.equal('Value is not 42 (got: 10)')

    const NumberModel = TH.requireSrcFile('Model/NumberModel')
    const AnswerToEverythingModel = NumberModel.extend()
      .assert(
        x => x === 42,
        assertionErrMsg('must equal 42')
      )
      .as('AnswerToEverything')

    TH.expect (() => AnswerToEverythingModel(43)).to.throw('Value must equal 42 (got: 43)')
  })


})
