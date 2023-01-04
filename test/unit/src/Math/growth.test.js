const TH = require('../../../test-helpers')
const growth = TH.requireSrcFile('Math/growth')

describe('growth', () => {
  it('should work as expected', () => {
    // Positive starting values
    growth(42, 420).should.eql(9)
    growth(42, 84).should.eql(1)
    growth(42, 63).should.eql(0.5)
    growth(42, 42).should.eql(0)
    growth(42, 21).should.eql(-0.5)
    growth(42, 0).should.eql(-1)
    growth(42, -42).should.eql(-2)
  })

  it('should handle negative starting values correctly', () => {
    growth(-42, -84).should.eql(-1)
    growth(-42, 0).should.eql(1)
    growth(-42, 42).should.eql(2)
  })

  it('should return Infinity/0/-Infinity for starting value of zero', () => {
    growth(0, 1).should.eql(Infinity)
    growth(0, 0).should.eql(0)
    growth(0, -1).should.eql(-Infinity)
  })
})
