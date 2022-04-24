const chai = require('chai')
chai.should()

const etaTimeStr = require('../../../src/etaTimeStr')

describe('etaTimeStr', () => {

  const currentTime = new Date('2022-01-01T07:30:00Z')

  it('should return expected values for valid data', () => {
    let timeString = etaTimeStr(currentTime, 10, 'America/Los_Angeles', 'en-US')
    timeString.should.equal('11:30:10 PM PST')

    timeString = etaTimeStr(currentTime, 3600, 'America/Los_Angeles', 'en-US')
    timeString.should.equal('Jan 1, 12:30:00 AM PST')
  })

  it('should run fine when not supplied with zone or locales', () => {
    etaTimeStr(currentTime, 10)
  })

  it('should return "--" for negative secondsLeft', () => {
    const timeString = etaTimeStr(currentTime, -10, 'America/Los_Angeles', 'en-US')
    timeString.should.equal('--')
  })

  it('should return "Invalid DateTime" for invalid time zone', () => {
    const timeString = etaTimeStr(currentTime, 10, 'foo', 'en-US')
    timeString.should.equal('Invalid DateTime')
  })

})
