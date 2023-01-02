const TH = require('../../../test-helpers')
const isGT = TH.requireSrcFile('Boolean/isGT')

// AUTO-GENERATED TEST: Do not modify the following "describe('isGT JSDoc example', ...)" block:
describe('isGT JSDoc example', () => {
  it('should execute correctly as described', () => {
    isGT(1, 42).should.eql(true)
    isGT(42, 1).should.eql(false)
    isGT(42, 42).should.eql(false)
    isGT(null, undefined).should.eql(false)
    isGT(undefined, null).should.eql(false)
    // function is curried: can call with fewer params to obtain a narrower function
    const isPositive = isGT(0)
    isPositive(-1).should.eql(false)
    isPositive(0).should.eql(false)
    isPositive(1).should.eql(true)
  })
})
