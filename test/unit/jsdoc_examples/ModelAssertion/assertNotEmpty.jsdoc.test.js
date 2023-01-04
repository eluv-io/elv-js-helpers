// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const assertNotEmpty = TH.requireSrcFile('ModelAssertion/assertNotEmpty')

describe('assertNotEmpty JSDoc example', () => {
  it('should execute correctly as described', () => {
    const isString = TH.requireSrcFile('Boolean/isString')
    const StringModel = TH.requireSrcFile('Model/StringModel')
    const assertAfterCheck = TH.requireSrcFile('ModelAssertion/assertAfterCheck')
    // Note use of spread operator (...) to unpack the arrays returned by assertAfterCheck() and assertNotEmpty()
    const NonEmptyStringModel = StringModel.extend()
      .assert(...assertAfterCheck(isString, ...assertNotEmpty))
      .as('NonEmptyString')
    NonEmptyStringModel('foo').should.eql('foo')
    TH.expect(() => NonEmptyStringModel('')).to.throw('Value must not be empty (got: "")')
    TH.expect(() => NonEmptyStringModel([])).to.throw('expecting String, got Array []')
  })
})
