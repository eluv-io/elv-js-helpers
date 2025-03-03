// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const toLocaleString = TH.requireSrcFile('Datetime/toLocaleString')

describe('toLocaleString JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const utcStrToDate = TH.requireSrcFile('Datetime/utcStrToDate')
    const myDate = utcStrToDate('2022-03-01T14:00:00Z')
    const USA_Pacific_short = toLocaleString('en-US', {
      hour: 'numeric',
      day: 'numeric',
      minute: 'numeric',
      month: 'short',
      second: 'numeric',
      timeZone: 'America/Los_Angeles',
      timeZoneName: 'short',
    })
    USA_Pacific_short(myDate).should.eql('Mar 1, 6:00:00 AM PST')
    const UK_long = toLocaleString('en-GB', {
      dateStyle: 'full',
      timeStyle: 'long',
      timeZone: 'Europe/London',
    })
    UK_long(myDate).should.eql('Tuesday, 1 March 2022 at 14:00:00 GMT')
    // function is curried, it is possible to pass all arguments at once to define and invoke in one step:
    const options = {
      dateStyle: 'short',
      timeStyle: 'short',
      timeZone: 'America/New_York',
    }
    toLocaleString('en-US', options, myDate).should.eql('3/1/22, 9:00 AM')
  })
})
