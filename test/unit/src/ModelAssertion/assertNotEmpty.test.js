const TH = require('../../../test-helpers')
const assertNotEmpty = TH.requireSrcFile('ModelAssertion/assertNotEmpty')

const isString = TH.requireSrcFile('Boolean/isString')

const StringModel = TH.requireSrcFile('Model/StringModel')

const assertAfterCheck = TH.requireSrcFile('ModelAssertion/assertAfterCheck')

describe('assertNotEmpty', () => {

  it('should work as expected', () => {
    const NonEmptyStringModel = StringModel.extend()
      .assert(
        ...assertAfterCheck(
          isString,
          ...assertNotEmpty
        )
      )
      .as('NonEmptyString')

    NonEmptyStringModel('foo').should.equal('foo')
    TH.expect(()=>NonEmptyStringModel('')).to.throw('Value must not be empty (got: "")')
    TH.expect(()=>NonEmptyStringModel([])  ).to.throw( 'expecting String, got Array []')
  })
})
