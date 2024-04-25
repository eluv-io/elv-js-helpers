// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const matchesRegex = TH.requireSrcFile('Boolean/matchesRegex')

describe('matchesRegex JSDoc example', () => {
  it('should execute correctly as described', () => {
    matchesRegex(/a/, 'abc').should.eql(true)
    matchesRegex(/a/, 'def').should.eql(false)
    matchesRegex(/a/, 0).should.eql(false)
    // function is curried: can call with fewer params to obtain a narrower function
    const isThreeDigitNum = matchesRegex(/^[0-9]{3}$/)
    isThreeDigitNum('123').should.eql(true)
    // Javascript does automatic type conversion in this case
    isThreeDigitNum(123).should.eql(true)
    isThreeDigitNum('foo').should.eql(false)
    isThreeDigitNum('001').should.eql(true)
    isThreeDigitNum(1).should.eql(false)
  })
})
