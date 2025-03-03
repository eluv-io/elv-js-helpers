// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const assertAfterCheck = TH.requireSrcFile('ModelAssertion/assertAfterCheck')

describe('assertAfterCheck JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const passesModelCheck = TH.requireSrcFile('Boolean/passesModelCheck')
    const NumberModel = TH.requireSrcFile('Model/NumberModel')
    const IntegerModel = NumberModel.extend()
      .assert(...assertAfterCheck(passesModelCheck(NumberModel), n => Number.isInteger(n), 'must be an integer'))
      .as('Integer')
    IntegerModel(42).should.eql(42)
    TH.expect(() => IntegerModel(4.2)).to.throw('Value must be an integer (got: 4.2)')
    TH.expect(() => IntegerModel('foo')).to.throw('expecting Number, got String "foo"')
    // Compare vs. case where assertAfterCheck is not used:
    const assertionErrMsg = TH.requireSrcFile('ModelAssertion/assertionErrMsg')
    const IntegerModelNoPrecheck = NumberModel.extend()
      .assert(n => Number.isInteger(n), assertionErrMsg('must be an integer'))
      .as('Integer')
    TH.expect(() => IntegerModelNoPrecheck('foo')).to.throw(
      'expecting Number, got String "foo"\nValue must be an integer (got: "foo")'
    )
  })
})
