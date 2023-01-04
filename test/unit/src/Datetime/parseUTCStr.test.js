const TH = require('../../../test-helpers')
const parseUTCStr = TH.requireSrcFile('Datetime/parseUTCStr')

describe('parseUTCStr', () => {

  const toLocaleString = TH.requireSrcFile('Datetime/toLocaleString')

  const utc = toLocaleString('en-US',
    {
      hour: 'numeric',
      day: 'numeric',
      minute: 'numeric',
      month: 'short',
      second: 'numeric',
      timeZone: 'UTC',
      timeZoneName: 'short'

    }
  )

  it('should work as expected', () => {
    utc(parseUTCStr('2022-01-01T14:00:00Z')).should.equal('Jan 1, 2:00:00 PM UTC')

    // bad year
    isNaN(parseUTCStr('0022-01-01T14:00:00Z')).should.be.true
    isNaN(parseUTCStr('3022-01-01T14:00:00Z')).should.be.true

    // bad month
    isNaN(parseUTCStr('2022-00-01T14:00:00Z')).should.be.true
    isNaN(parseUTCStr('2022-13-01T14:00:00Z')).should.be.true

    // bad day
    isNaN(parseUTCStr('2022-01-00T14:00:00Z')).should.be.true
    isNaN(parseUTCStr('2022-01-32T14:00:00Z')).should.be.true

    isNaN(parseUTCStr('2022-02-00T14:00:00Z')).should.be.true
    isNaN(parseUTCStr('2022-02-29T14:00:00Z')).should.be.true

    isNaN(parseUTCStr('2022-03-00T14:00:00Z')).should.be.true
    isNaN(parseUTCStr('2022-03-32T14:00:00Z')).should.be.true

    isNaN(parseUTCStr('2022-04-00T14:00:00Z')).should.be.true
    isNaN(parseUTCStr('2022-04-31T14:00:00Z')).should.be.true

    isNaN(parseUTCStr('2022-05-00T14:00:00Z')).should.be.true
    isNaN(parseUTCStr('2022-05-32T14:00:00Z')).should.be.true

    isNaN(parseUTCStr('2022-06-00T14:00:00Z')).should.be.true
    isNaN(parseUTCStr('2022-06-31T14:00:00Z')).should.be.true

    isNaN(parseUTCStr('2022-07-00T14:00:00Z')).should.be.true
    isNaN(parseUTCStr('2022-07-32T14:00:00Z')).should.be.true

    isNaN(parseUTCStr('2022-08-00T14:00:00Z')).should.be.true
    isNaN(parseUTCStr('2022-08-32T14:00:00Z')).should.be.true

    isNaN(parseUTCStr('2022-09-00T14:00:00Z')).should.be.true
    isNaN(parseUTCStr('2022-09-31T14:00:00Z')).should.be.true

    isNaN(parseUTCStr('2022-10-00T14:00:00Z')).should.be.true
    isNaN(parseUTCStr('2022-10-32T14:00:00Z')).should.be.true

    isNaN(parseUTCStr('2022-11-00T14:00:00Z')).should.be.true
    isNaN(parseUTCStr('2022-11-31T14:00:00Z')).should.be.true

    isNaN(parseUTCStr('2022-12-00T14:00:00Z')).should.be.true
    isNaN(parseUTCStr('2022-12-32T14:00:00Z')).should.be.true

    // bad hh:mm:ss
    isNaN(parseUTCStr('2022-01-01T24:00:00Z')).should.be.true
    isNaN(parseUTCStr('2022-01-01T00:60:00Z')).should.be.true
    isNaN(parseUTCStr('2022-01-01T00:00:60Z')).should.be.true
  })

  it('should handle leap years correctly', () => {
    isNaN(parseUTCStr('2020-02-29T14:00:00Z')).should.be.false
    isNaN(parseUTCStr('2000-02-29T14:00:00Z')).should.be.false
    isNaN(parseUTCStr('2100-02-29T14:00:00Z')).should.be.true
  })

  it('should only allow leap seconds at end of june 30 or dec 31', () => {
    isNaN(parseUTCStr('2022-01-01T00:00:60Z')).should.be.true
    isNaN(parseUTCStr('2022-01-01T23:59:60Z')).should.be.true
    isNaN(parseUTCStr('2022-06-01T23:59:60Z')).should.be.true
    isNaN(parseUTCStr('2022-12-01T23:59:60Z')).should.be.true

    isNaN(parseUTCStr('2022-06-30T23:59:60Z')).should.be.false
    isNaN(parseUTCStr('2022-12-31T23:59:60Z')).should.be.false
  })
})
