// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const matchesRegex = TH.requireSrcFile('Boolean/matchesRegex')

describe('matchesRegex JSDoc example', () => {
  it('should execute correctly as described', () => {
    matchesRegex(/a/, 'abc').should.eql(true)
    matchesRegex(/a/, 'def').should.eql(false)
    matchesRegex(/a/, 0).should.eql(false)
    // function is curried: can call with fewer params to obtain a narrower function
    const isFourDigitNumString = matchesRegex(/^[0-9]{4}$/)
    isFourDigitNumString('1234').should.eql(true)
    isFourDigitNumString('0001').should.eql(true)
    isFourDigitNumString('foo').should.eql(false)
    isFourDigitNumString(1234).should.eql(false)
  })
})
