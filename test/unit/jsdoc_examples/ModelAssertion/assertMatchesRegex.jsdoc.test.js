// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const assertMatchesRegex = TH.requireSrcFile('ModelAssertion/assertMatchesRegex')

describe('assertMatchesRegex JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const StringModel = TH.requireSrcFile('Model/StringModel')
    // Note use of spread operator (...) to unpack the array returned by _assertBoundedUpper()
    const UUIDStringModel = StringModel.extend()
      .assert(
        ...assertMatchesRegex(
          StringModel,
          /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
          'is not in UUID format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
        )
      )
      .as('UUIDString')
    UUIDStringModel('12345678-1234-1234-1234-123456789abc').should.eql('12345678-1234-1234-1234-123456789abc')
    TH.expect(() => UUIDStringModel('foo')).to.throw(
      'Value is not in UUID format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx (got: "foo")'
    )
    TH.expect(() => UUIDStringModel(42)).to.throw('expecting String, got Number 42')
  })
})
