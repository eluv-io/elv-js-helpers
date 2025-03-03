// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const assertValidUTCStr = TH.requireSrcFile('ModelAssertion/assertValidUTCStr')

describe('assertValidUTCStr JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const StringModel = TH.requireSrcFile('Model/StringModel')
    // Note use of spread operator (...) to unpack the array returned by _assertBoundedUpper()
    const UTCDateTimeStringModel = StringModel.extend()
      .assert(...assertValidUTCStr())
      .as('UTCDateTimeString')
    UTCDateTimeStringModel('2022-05-03T00:26:07Z').should.eql('2022-05-03T00:26:07Z')
    TH.expect(() => UTCDateTimeStringModel('2022-99-03T00:26:07Z')).to.throw(
      'Value is not a valid UTC datetime string (got: "2022-99-03T00:26:07Z")'
    )
    TH.expect(() => UTCDateTimeStringModel('foo')).to.throw('Value is not a valid UTC datetime string (got: "foo")')
  })
})
