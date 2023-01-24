// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const now = TH.requireSrcFile('Datetime/now')

describe('now JSDoc example', () => {
  it('should execute correctly as described', () => {
    const isGT = TH.requireSrcFile('Boolean/isGT')
    const kind = TH.requireSrcFile('Validation/kind')
    const currentDatetime = now()
    kind(currentDatetime).should.eql('Date')
    // later than 2022-12-02T16:53:20Z:
    isGT(1670000000000, currentDatetime.valueOf()).should.eql(true)
  })
})
