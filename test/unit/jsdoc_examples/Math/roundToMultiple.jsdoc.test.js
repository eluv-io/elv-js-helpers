// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const roundToMultiple = TH.requireSrcFile('Math/roundToMultiple')

describe('roundToMultiple JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    // Positive multiplicand
    roundToMultiple(10, 13).should.eql(10)
    roundToMultiple(10, 15).should.eql(20)
    roundToMultiple(10, 19).should.eql(20)
    roundToMultiple(0.5, 1.3).should.eql(1.5)
    roundToMultiple(10, -13).should.eql(-10)
    roundToMultiple(10, -15).should.eql(-10)
    roundToMultiple(10, -19).should.eql(-20)
    // Negative multiplicand
    roundToMultiple(-10, 13).should.eql(10)
    roundToMultiple(-10, 15).should.eql(10)
    roundToMultiple(-10, 19).should.eql(20)
    roundToMultiple(-10, -13).should.eql(-10)
    roundToMultiple(-10, -15).should.eql(-20)
    roundToMultiple(-10, -19).should.eql(-20)
    // Zero multiple
    roundToMultiple(0, 1).should.eql(NaN)
    roundToMultiple(0, 0).should.eql(NaN)
    roundToMultiple(0, -1).should.eql(NaN)
    // Function is curried, call with fewer arguments to get a new, more specific function
    const roundToHundreds = roundToMultiple(100)
    roundToHundreds(125).should.eql(100)
  })
})
