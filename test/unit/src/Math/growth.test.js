const TH = require('../../../test-helpers')
const growth = TH.requireSrcFile('Math/growth')

// AUTO-GENERATED TEST: Do not modify the following "describe('growth JSDoc example', ...)" block:
describe('growth JSDoc example', () => {
  it('should execute correctly as described', () => {
    // Positive starting value
    growth(42, 420).should.eql(9)
    growth(42, 84).should.eql(1)
    growth(42, 63).should.eql(0.5)
    growth(42, 42).should.eql(0)
    growth(42, 21).should.eql(-0.5)
    growth(42, 0).should.eql(-1)
    growth(42, -42).should.eql(-2)
    // Negative starting value
    growth(-42, -84).should.eql(-1)
    growth(-42, 0).should.eql(1)
    growth(-42, 42).should.eql(2)
    // Zero starting value
    growth(0, 1).should.eql(Infinity)
  })
})

// Place additional tests in the 'describe' block below.
//
// describe('growth', () => {
//
//   it('should... ', () => {
//
//   })
//
// })
