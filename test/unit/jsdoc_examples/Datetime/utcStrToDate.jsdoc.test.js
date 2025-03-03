// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const utcStrToDate = TH.requireSrcFile('Datetime/utcStrToDate')

describe('utcStrToDate JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const dateObject = utcStrToDate('2022-01-01T14:00:00Z')
    dateObject.valueOf().should.eql(1641045600000)
    TH.expect(() => utcStrToDate('2022-99-01T14:00:00Z')).to.throw(
      'Value is not a valid UTC datetime string (got: "2022-99-01T14:00:00Z")'
    )
    TH.expect(() => utcStrToDate(42)).to.throw('expecting String, got Number 42')
  })
})
