const TH = require('../../../test-helpers')
const isGT = TH.requireSrcFile('Boolean/isGT')

describe('isGT', () => {

  it('should work as expected', () => {
    isGT(1, 42).should.be.true
    isGT(42, 1).should.be.false
    isGT(42, 42).should.be.false
    isGT(null, undefined).should.be.false
    isGT(undefined, null).should.be.false
  })

  it('should be curried', () => {
    const isPositive = isGT(0)
    isPositive(-1).should.be.false
    isPositive(1).should.be.true
  })
})
