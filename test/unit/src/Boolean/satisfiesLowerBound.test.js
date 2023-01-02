const TH = require('../../../test-helpers')
const satisfiesLowerBound = TH.requireSrcFile('Boolean/satisfiesLowerBound')

// AUTO-GENERATED TEST: Do not modify the following "describe('satisfiesLowerBound JSDoc example', ...)" block:
describe('satisfiesLowerBound JSDoc example', () => {
  it('should execute correctly as described', () => {
    const compare = TH.requireSrcFile('Functional/compare')
    satisfiesLowerBound(0, true, compare, 42).should.eql(true)
    satisfiesLowerBound(0, true, compare, 0).should.eql(true)
    satisfiesLowerBound(0, true, compare, -1).should.eql(false)
    satisfiesLowerBound(0, false, compare, 0).should.eql(false)
    // function is curried: call with fewer params to obtain a narrower function
    const isPositive = satisfiesLowerBound(0, false, compare)
    isPositive(-1).should.eql(false)
    isPositive(0).should.eql(false)
    isPositive(1).should.eql(true)
  })
})
