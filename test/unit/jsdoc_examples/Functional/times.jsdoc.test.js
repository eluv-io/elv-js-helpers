// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const times = TH.requireSrcFile('Functional/times')

describe('times JSDoc example', () => {
  it('should execute correctly as described', () => {
    const double = x => x * 2
    times(double, 3).should.eql([0, 2, 4])
    // function is curried: call with just first param to obtain a more specialized function
    const getSquares = times(x => x ** 2)
    getSquares(4).should.eql([0, 1, 4, 9])
  })
})
