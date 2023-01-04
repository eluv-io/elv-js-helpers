// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const assertEmpty = TH.requireSrcFile('ModelAssertion/assertEmpty')

describe('assertEmpty JSDoc example', () => {
  it('should execute correctly as described', () => {
    const isString = TH.requireSrcFile('Boolean/isString')
    const StringModel = TH.requireSrcFile('Model/StringModel')
    const assertAfterCheck = TH.requireSrcFile('ModelAssertion/assertAfterCheck')
    // Note use of spread operator (...) to unpack the arrays returned by assertAfterCheck() and assertEmpty()
    const EmptyStringModel = StringModel.extend()
      .assert(...assertAfterCheck(isString, ...assertEmpty))
      .as('EmptyString')
    TH.expect(() => EmptyStringModel('foo')).to.throw('Value must be empty (got: "foo")')
    EmptyStringModel('').should.eql('')
    TH.expect(() => EmptyStringModel([])).to.throw('expecting String, got Array []')
  })
})
