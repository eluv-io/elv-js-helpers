// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const flip = TH.requireSrcFile('Functional/flip')

describe('flip JSDoc example', () => {
  it('should execute correctly as described', () => {
    const div = (a, b) => a / b
    div(4, 2).should.eql(2)
    const reciprocalDiv = flip(div)
    reciprocalDiv(4, 2).should.eql(0.5)
    // flip is curried, it is possible to call with all arguments at once
    flip(div, 4, 2).should.eql(0.5)
  })
})
