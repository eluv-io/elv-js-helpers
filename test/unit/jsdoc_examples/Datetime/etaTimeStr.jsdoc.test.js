// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const etaTimeStr = TH.requireSrcFile('Datetime/etaTimeStr')

describe('etaTimeStr JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const myTime = new Date('2022-01-01T07:30:00Z')
    etaTimeStr(myTime, 10, 'America/Los_Angeles', 'en-US').should.eql('11:30:10 PM PST')
    etaTimeStr(myTime, 3600, 'America/Los_Angeles', 'en-US').should.eql('Jan 1, 12:30:00 AM PST')
    etaTimeStr(myTime, -10, 'America/Los_Angeles', 'en-US').should.eql('--')
    TH.expect(() => etaTimeStr(myTime, 10, 'foo', 'en-US')).to.throw('Invalid time zone specified: foo')
  })
})
