// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const RE_UTC_TIMESTAMP = TH.requireSrcFile('Datetime/RE_UTC_TIMESTAMP')

describe('RE_UTC_TIMESTAMP JSDoc example', () => {
  it('should execute correctly as described', () => {
    RE_UTC_TIMESTAMP.test('2022-01-02T03:45:00Z').should.eql(true)
    RE_UTC_TIMESTAMP.test('foo').should.eql(false)
    const utcString = '2022-01-02T03:45:00Z'
    const match = utcString.match(RE_UTC_TIMESTAMP)
    if (!match) throw Error('UTC timestamp not in proper format')
    // year
    parseInt(match[1], 10).should.eql(2022)
    // month
    parseInt(match[2], 10).should.eql(1)
    // day
    parseInt(match[3], 10).should.eql(2)
    // hour
    parseInt(match[4], 10).should.eql(3)
    // minute
    parseInt(match[5], 10).should.eql(45)
    // second
    parseInt(match[6], 10).should.eql(0)
    const utcStringFrac = '2022-01-02T03:45:00.123Z'
    const fracMatch = utcStringFrac.match(RE_UTC_TIMESTAMP)
    // fractional seconds
    parseFloat(fracMatch[7]).should.eql(0.123)
  })
})
