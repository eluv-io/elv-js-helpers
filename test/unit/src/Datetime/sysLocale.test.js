const TH = require('../../../test-helpers')
const sysLocale = TH.requireSrcFile('Datetime/sysLocale')

describe('sysLocale', () => {
  it('should return the system locale setting', () => {
    // unfortunately we have no way to manipulate the environment's locale, so we are reduced to just
    // duplicating the functionality of sysLocale() itself and making sure it doesn't throw an exception
    const opts = new Intl.DateTimeFormat().resolvedOptions()
    sysLocale().should.equal(opts.locale)
  })
})
