const TH = require('../../../test-helpers')
const assertEmpty = TH.requireSrcFile('ModelAssertion/assertEmpty')

describe('assertEmpty', () => {

  const assertAfterCheck = TH.requireSrcFile('ModelAssertion/assertAfterCheck')
  const isString = TH.requireSrcFile('Boolean/isString')
  const StringModel = TH.requireSrcFile('Model/StringModel')

  const EmptyStringModel = StringModel.extend()
    .assert(
      ...assertAfterCheck(
        isString,
        ...assertEmpty
      )
    )
    .as('EmptyString')

  it('should work as expected', () => {
    TH.expect(() => EmptyStringModel('foo')).to.throw('Value must be empty (got: "foo")')
    EmptyStringModel('').should.equal('')
    TH.expect(() => EmptyStringModel([])).to.throw('expecting String, got Array []')
  })
})
