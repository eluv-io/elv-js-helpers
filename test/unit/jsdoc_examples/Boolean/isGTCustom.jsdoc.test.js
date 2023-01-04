// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const isGTCustom = TH.requireSrcFile('Boolean/isGTCustom')

describe('isGTCustom JSDoc example', () => {
  it('should execute correctly as described', () => {
    const strLength = str => str.length
    const isLongerThan = isGTCustom(strLength)
    isLongerThan('a', 'ab').should.eql(true)
    isLongerThan('ab', 'a').should.eql(false)
    // x.length returns undefined for x === 42, undefined > undefined returns false:
    isLongerThan(42, 42).should.eql(false)
    TH.expect(() => isLongerThan(null, undefined)).to.throw("Cannot read properties of null (reading 'length')")
    // function is curried: can call with more than 1 argument
    // example: call with 2 args
    const isLongerThan3Chars = isGTCustom(strLength, 'foo')
    isLongerThan3Chars('bar').should.eql(false)
    isLongerThan3Chars('foobar').should.eql(true)
    // example: call with 3 args
    isGTCustom(strLength, 'foo', 'bar').should.eql(false)
    isGTCustom(strLength, 'foo', 'foobar').should.eql(true)
  })
})
