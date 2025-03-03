// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const UTCStrModel = TH.requireSrcFile('Model/UTCStrModel')

describe('UTCStrModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    UTCStrModel('2022-01-01T14:00:00Z').should.eql('2022-01-01T14:00:00Z')
    UTCStrModel('2022-01-01T14:00:00.123Z').should.eql('2022-01-01T14:00:00.123Z')
    TH.expect(() => UTCStrModel('2022-13-01T14:00:00Z')).to.throw(
      'Value is not a valid UTC datetime string (got: "2022-13-01T14:00:00Z")'
    )
    TH.expect(() => UTCStrModel('foo')).to.throw(
      `Value is not in UTC format 'yyyy-mm-ddThh:mm:ss[.s...]Z' (got: "foo")`
    )
    TH.expect(() => UTCStrModel(42)).to.throw('expecting String, got Number 42')
  })
})
