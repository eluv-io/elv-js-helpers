const chai = require('chai')
chai.should()

const sysTimezone = require('../../../src/sysTimezone')

describe('sysTimezone', () => {
  it('should return the system timezone setting', () => {
    // unfortunately we have no way to manipulate the environment's timezone, so we are reduced to just
    // duplicating the functionality of sysTimezone() itself and making sure it doesn't throw an exception
    const opts = new Intl.DateTimeFormat().resolvedOptions()
    sysTimezone().should.equal(opts.timeZone)
  })
})
