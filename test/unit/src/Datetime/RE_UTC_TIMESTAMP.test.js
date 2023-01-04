const TH = require('../../../test-helpers')
const RE_UTC_TIMESTAMP = TH.requireSrcFile('Datetime/RE_UTC_TIMESTAMP')

describe('REGEX_UTC_TIMESTAMP', () => {

  it('should work as expected', () => {
    RE_UTC_TIMESTAMP.test('2022-01-02T03:45:00Z').should.be.true
    RE_UTC_TIMESTAMP.test('foo').should.be.false

    const utcString = '2022-01-02T03:45:00Z'
    const match = utcString.match(RE_UTC_TIMESTAMP)

    parseInt(match[1], 10).should.equal(2022)
    parseInt(match[2], 10).should.equal(1)
    parseInt(match[3], 10).should.equal(2)
    parseInt(match[4], 10).should.equal(3)
    parseInt(match[5], 10).should.equal(45)
    parseInt(match[6], 10).should.equal(0)
  })
})
