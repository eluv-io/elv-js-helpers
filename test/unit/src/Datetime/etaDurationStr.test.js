const chai = require('chai')
chai.should()

const etaDurationStr = require('../../../../src/Datetime/etaDurStr')

describe('etaDurationStr', () => {
  const minute = 60
  const hour = 60 * minute
  const day = 24 * hour

  it('should return expected values for non-negative secondsLeft', () => {
    etaDurationStr(0).should.equal('0s')
    etaDurationStr(1).should.equal('1s')
    etaDurationStr( minute + 1).should.equal('1m 01s')
    etaDurationStr(hour + minute + 1).should.equal('1h 01m 01s')
    etaDurationStr(day + hour + minute + 1).should.equal('1d 01h 01m 01s')
    etaDurationStr(11 * day + hour + minute + 1).should.equal('11d 01h 01m 01s')
  })

  it('should return "--" if secondsLeft is negative', () => {
    const timeString = etaDurationStr(-1)
    timeString.should.equal('--')
  })

})
