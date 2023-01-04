const TH = require('../../../test-helpers')
const isLT = TH.requireSrcFile('Boolean/isLT')

describe('isLT', () => {
  it('should work as expected', () => {
    isLT(42, 1).should.eql(true)
    isLT(1, 42).should.eql(false)
    isLT(42, 42).should.eql(false)
    isLT(null, undefined).should.eql(false)
    isLT(undefined, null).should.eql(false)
  })

  it('should be curried', () => {
    const isNegative = isLT(0)
    isNegative(-1).should.eql(true)
    isNegative(0).should.eql(false)
    isNegative(1).should.eql(false)
  })

})
