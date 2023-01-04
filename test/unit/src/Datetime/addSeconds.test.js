const TH = require('../../../test-helpers')
const addSeconds = TH.requireSrcFile('Datetime/addSeconds')

describe('addSeconds', () => {
  const d = new Date('2022-01-01T07:30:00Z')

  it('should return expected values', () => {
    addSeconds(3600, d).toISOString().should.equal('2022-01-01T08:30:00.000Z')
    addSeconds(-3600, d).toISOString().should.equal('2022-01-01T06:30:00.000Z')
  })
})
