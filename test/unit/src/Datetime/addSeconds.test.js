const TH = require('../../../test-helpers')
const addSeconds = TH.requireSrcFile('Datetime/addSeconds')

describe('addSeconds', () => {
  const d = new Date('2022-01-01T07:30:00Z')

  // note that following test depends on environment's locale settings
  it('should return expected values', () => {
    addSeconds(3600, d).toUTCString().should.equal('Sat, 01 Jan 2022 08:30:00 GMT')
    addSeconds(-3600, d).toUTCString().should.equal('Sat, 01 Jan 2022 06:30:00 GMT')
  })
})
