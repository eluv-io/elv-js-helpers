const TH = require('../../../test-helpers')
const satisfiesUpperBound = TH.requireSrcFile('Boolean/satisfiesUpperBound')

// AUTO-GENERATED TEST: Do not modify the following "describe('satisfiesUpperBound JSDoc example', ...)" block:
describe('satisfiesUpperBound JSDoc example', () => {
  it('should execute correctly as described', () => {
    const compare = TH.requireSrcFile('Functional/compare')
    satisfiesUpperBound(42, true, compare, 42).should.eql(true)
    satisfiesUpperBound(42, true, compare, 0).should.eql(true)
    satisfiesUpperBound(42, true, compare, -1).should.eql(true)
    satisfiesUpperBound(42, false, compare, 42).should.eql(false)
    // function is curried: call with fewer params to obtain a narrower function
    const isNegative = satisfiesUpperBound(0, false, compare)
    isNegative(-1).should.eql(true)
    isNegative(0).should.eql(false)
    isNegative(1).should.eql(false)
  })
})
