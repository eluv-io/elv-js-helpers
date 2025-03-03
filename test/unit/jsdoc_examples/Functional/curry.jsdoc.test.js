// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const curry = TH.requireSrcFile('Functional/curry')

describe('curry JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const withinBounds = (lower, upper, val) => val >= lower && val <= upper
    // curry an already-defined function
    const fromZeroToOne = curry(withinBounds)(0, 1) // returns a new function that takes 1 argument (val)
    fromZeroToOne(0).should.eql(true)
    fromZeroToOne(42).should.eql(false)
    // curry the function during definition
    const greaterThan = curry((lowerBound, val) => val > lowerBound)
    // function can be called normally with full set of arguments
    greaterThan(0, 1).should.eql(true)
    // when called with only lowerBound, returns a new function that takes 1 argument (val)
    const isPositive = greaterThan(0)
    isPositive(0).should.eql(false)
    isPositive(42).should.eql(true)
  })
})
