// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const growth = TH.requireSrcFile('Math/growth')

describe('growth JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
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
    growth(0, 0).should.eql(0)
    growth(0, -1).should.eql(-Infinity)
  })
})
