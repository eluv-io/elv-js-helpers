const TH = require('../../../test-helpers')
const satisfiesBetweenBounds = TH.requireSrcFile('Boolean/satisfiesBetweenBounds')

const compare = TH.requireSrcFile('Functional/compare')

describe('satisfiesBetweenBounds', () => {

  it('should work as expected', () => {
    satisfiesBetweenBounds(0, 42, true, true, compare, 42).should.be.true
    satisfiesBetweenBounds(0, 42, true, true, compare, 0).should.be.true
    satisfiesBetweenBounds(0, 42, true, true, compare, -1).should.be.false
    satisfiesBetweenBounds(0, 42, false, false, compare, 0).should.be.false
  })

  it('should be curried', () => {
    const isFromZeroToOne = satisfiesBetweenBounds(0, 1, true, true, compare)
    isFromZeroToOne(0.5).should.be.true
    isFromZeroToOne(1).should.be.true
    isFromZeroToOne(1.5).should.be.false
  })
})
