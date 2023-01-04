const TH = require('../../../test-helpers')
const isGTCustom = TH.requireSrcFile('Boolean/isGTCustom')

describe('isGTCustom', () => {

  const strLength = str => str.length
  const isLongerThan = isGTCustom(strLength)

  it('should return a function that applies preprocessFn', () => {
    isLongerThan('a', 'ab').should.be.true
    isLongerThan('ab', 'a').should.be.false
    isLongerThan(42, 42).should.be.false
    TH.expect(() => isLongerThan(null, undefined)).to.throw('Cannot read properties of null (reading \'length\')')
  })

  it('should work when called with 2 args', () => {
    const isLongerThan3Chars = isGTCustom(strLength, 'foo')
    isLongerThan3Chars('bar').should.be.false
    isLongerThan3Chars('foobar').should.be.true
  })

  it('should work when called with 3 args', () => {
    isGTCustom(strLength, 'foo', 'bar').should.be.false
    isGTCustom(strLength, 'foo', 'foobar').should.be.true
  })
})
