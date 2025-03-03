// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const etaDurStr = TH.requireSrcFile('Datetime/etaDurStr')

describe('etaDurStr JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    etaDurStr(0).should.eql('0s')
    etaDurStr(1).should.eql('1s')
    etaDurStr(61).should.eql('1m 01s')
    etaDurStr(3661).should.eql('1h 01m 01s')
    etaDurStr(90061).should.eql('1d 01h 01m 01s')
    etaDurStr(954061).should.eql('11d 01h 01m 01s')
    etaDurStr(-1).should.eql('--')
  })
})
