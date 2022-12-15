const chai = require('chai')
chai.should()

const etaDurStr = require('../../../../src/Datetime/etaDurStr')

describe('etaDurStr', () => {
  const minute = 60
  const hour = 60 * minute
  const day = 24 * hour

  it('should return expected values for non-negative secondsLeft', () => {
    etaDurStr(0).should.equal('0s')
    etaDurStr(1).should.equal('1s')
    etaDurStr( minute + 1).should.equal('1m 01s')
    etaDurStr(hour + minute + 1).should.equal('1h 01m 01s')
    etaDurStr(day + hour + minute + 1).should.equal('1d 01h 01m 01s')
    etaDurStr(11 * day + hour + minute + 1).should.equal('11d 01h 01m 01s')
  })

  it('should return "--" if secondsLeft is negative', () => {
    const timeString = etaDurStr(-1)
    timeString.should.equal('--')
  })
})
