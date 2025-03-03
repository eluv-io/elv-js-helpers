// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const addSeconds = TH.requireSrcFile('Datetime/addSeconds')

describe('addSeconds JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const d = new Date('2022-01-01T07:30:00Z')
    // Note that following depends on environment's locale settings (shown values are for locale 'en-US')
    addSeconds(3600, d).toUTCString().should.eql('Sat, 01 Jan 2022 08:30:00 GMT')
    addSeconds(-3600, d).toUTCString().should.eql('Sat, 01 Jan 2022 06:30:00 GMT')
  })
})
