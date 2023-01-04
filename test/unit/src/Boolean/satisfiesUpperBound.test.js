const TH = require('../../../test-helpers')
const satisfiesUpperBound = TH.requireSrcFile('Boolean/satisfiesUpperBound')

describe('satisfiesUpperBound', () => {

  const compare = TH.requireSrcFile('Functional/compare')

  it('should work as expected', () => {
    satisfiesUpperBound(42, true, compare, 42).should.be.true
    satisfiesUpperBound(42, true, compare, 0).should.be.true
    satisfiesUpperBound(42, true, compare, -1).should.be.true
    satisfiesUpperBound(42, false, compare, 42).should.be.false
  })

  it('should be curried', () => {
    const isNegative = satisfiesUpperBound(0, false, compare)
    isNegative(-1).should.be.true
    isNegative(0).should.be.false
    isNegative(1).should.be.false
  })
})
