const TH = require('../../../test-helpers')
const curry = TH.requireSrcFile('Functional/curry')

describe('curry', () => {

  const withinBounds = (lower, upper, val) => (val >= lower) && (val <= upper)

  it('should work as expected', () => {
    const fromZeroToOne = curry(withinBounds)(0, 1)
    fromZeroToOne(0).should.be.true
    fromZeroToOne(42).should.be.false

    const greaterThan = curry(
      (lowerBound, val) => (val > lowerBound)
    )
    greaterThan(0, 1).should.be.true

    const isPositive = greaterThan(0)
    isPositive(0).should.be.false
    isPositive(42).should.be.true
  })
})
