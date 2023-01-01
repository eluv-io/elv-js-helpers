const TH = require('../../../test-helpers')
const isGTE = TH.requireSrcFile('Boolean/isGTE')

describe('isGTE', () => {
  it('should work as expected', () => {
    isGTE(1, 42).should.be.true
    isGTE(42, 1).should.be.false
    isGTE(42, 42).should.be.true
    isGTE(null, undefined).should.be.false
  })

  it('should be curried', () => {
    const notNegative = isGTE(0)
    notNegative(-1).should.be.false
    notNegative(0).should.be.true
    notNegative(1).should.be.true
  })
})
