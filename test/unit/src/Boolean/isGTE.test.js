const TH = require('../../../test-helpers')
const isGTE = TH.requireSrcFile('Boolean/isGTE')

// AUTO-GENERATED TEST: Do not modify the following "describe('isGTE JSDoc example', ...)" block:
describe('isGTE JSDoc example', () => {
  it('should execute correctly as described', () => {
    isGTE(1, 42).should.eql(true)
    isGTE(42, 1).should.eql(false)
    isGTE(42, 42).should.eql(true)
    isGTE(null, undefined).should.eql(false)
    // function is curried: can call with fewer params to obtain a narrower function
    const notNegative = isGTE(0)
    notNegative(-1).should.eql(false)
    notNegative(0).should.eql(true)
    notNegative(1).should.eql(true)
  })
})
