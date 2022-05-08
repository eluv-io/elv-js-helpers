const chai = require('chai')
chai.should()
const expect = chai.expect

const assertionErrMsg = require('../../../src/assertionErrMsg')

describe('assertionErrMsg', () => {

  it('should return expected strings', () => {
    assertionErrMsg('is not 42')(false, 10, null)
      .should.equal('Value is not 42 (got: 10)')

    const NumberModel = require('../../../src/NumberModel')
    const AnswerToEverythingModel = NumberModel.extend()
      .assert(
        x => x === 42,
        assertionErrMsg('must equal 42')
      )
      .as('AnswerToEverything')

    expect (() => AnswerToEverythingModel(43)).to.throw('Value must equal 42 (got: 43)')
  })


})
