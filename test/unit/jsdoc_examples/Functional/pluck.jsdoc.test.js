// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const pluck = TH.requireSrcFile('Functional/pluck')

describe('pluck JSDoc example', () => {
  it('should execute correctly as described', () => {
    const arrOfObj = [
      {a: 1, b: 2},
      {b: 2, c: 3},
    ]
    pluck('b', arrOfObj).should.eql([2, 2])
    pluck('a', arrOfObj).should.eql([1, undefined])
    const arrOfArr = [
      ['a', 'b'],
      ['b', 'c', 'd'],
    ]
    pluck(1, arrOfArr).should.eql(['b', 'c'])
    pluck(2, arrOfArr).should.eql([undefined, 'd'])
    pluck(3, 3).should.eql([undefined])
    TH.expect(() => pluck(3, undefined)).to.throw('Cannot read properties of undefined')
    // function is curried: call with just first param to obtain a more specialized function
    const getFirstElements = pluck(0)
    getFirstElements(arrOfArr).should.eql(['a', 'b'])
  })
})
