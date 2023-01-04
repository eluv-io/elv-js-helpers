const TH = require('../../../test-helpers')
const toLocaleString = TH.requireSrcFile('Datetime/toLocaleString')

describe('toLocaleString', () => {

  const utcStrToDate = TH.requireSrcFile('Datetime/utcStrToDate')

  const myDate = utcStrToDate('2022-03-01T14:00:00Z')

  it('should work as expected', () => {
    const USA_Pacific_short = toLocaleString(
      'en-US',
      {
        hour: 'numeric',
        day: 'numeric',
        minute: 'numeric',
        month: 'short',
        second: 'numeric',
        timeZone: 'America/Los_Angeles',
        timeZoneName: 'short'
      }
    )

    USA_Pacific_short(myDate).should.equal('Mar 1, 6:00:00 AM PST')

    const UK_long = toLocaleString(
      'en-GB',
      {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: 'Europe/London'
      }
    )

    UK_long(myDate).should.equal('Tuesday, 1 March 2022 at 14:00:00 GMT')
  })

  it('should be curried', () => {
    toLocaleString(
      'en-US',
      {
        dateStyle: 'short',
        timeStyle: 'short',
        timeZone: 'America/New_York'
      },
      myDate
    ).should.equal('3/1/22, 9:00 AM')
  })
})
