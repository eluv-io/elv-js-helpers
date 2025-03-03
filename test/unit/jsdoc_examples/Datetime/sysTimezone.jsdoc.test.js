// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const sysTimezone = TH.requireSrcFile('Datetime/sysTimezone')

describe('sysTimezone JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    sysTimezone().should.eql('America/Los_Angeles')
  })
})
