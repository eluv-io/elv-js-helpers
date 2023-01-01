const TH = require('../../../test-helpers')
const assertMatchesRegex = TH.requireSrcFile('ModelAssertion/assertMatchesRegex')

const StringModel = TH.requireSrcFile('Model/StringModel')

describe('assertMatchesRegex', () => {

  it('should work as expected when used to extend a Model', () => {
    const UUIDStringModel = StringModel.extend()
      .assert(
        ...assertMatchesRegex(
          StringModel,
          /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
          'is not in UUID format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
        )
      ).as('UUIDString')

    UUIDStringModel('12345678-1234-1234-1234-123456789abc').should.equal('12345678-1234-1234-1234-123456789abc')

    TH.expect(() => UUIDStringModel('foo'))
      .to.throw('Value is not in UUID format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx (got: "foo")')

    TH.expect(() => UUIDStringModel(42))
      .to.throw('expecting String, got Number 42')

    const HexStringModel = StringModel.extend()
      .assert(
        ...assertMatchesRegex(
          StringModel,
          /^[0-9a-f]+$/
        )
      ).as('HexString')

    TH.expect(() => HexStringModel('xyz'))
      .to.throw('Value is not in valid format or contains illegal characters (must match regular expression: /^[0-9a-f]+$/) (got: "xyz")')
  })
})
