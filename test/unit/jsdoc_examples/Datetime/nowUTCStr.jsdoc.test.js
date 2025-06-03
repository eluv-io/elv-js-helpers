// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const nowUTCStr = TH.requireSrcFile('Datetime/nowUTCStr')

describe('nowUTCStr JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const isGT = TH.requireSrcFile('Boolean/isGT')
    const kind = TH.requireSrcFile('Validation/kind')
    const currentUTCTimestamp = nowUTCStr()
    kind(currentUTCTimestamp).should.eql('String')
    // string value is larger (later) than 2025-01-01T01:00:00Z:
    isGT('2025-01-01T01:00:00Z', currentUTCTimestamp).should.eql(true)
  })
})
