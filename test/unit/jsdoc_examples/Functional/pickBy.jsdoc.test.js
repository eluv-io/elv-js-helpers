// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const pickBy = TH.requireSrcFile('Functional/pickBy')

describe('pickBy JSDoc example', () => {
  it('should execute correctly as described', () => {
    const valueIsEven = (v, k) => v % 2 === 0
    const obj = {a: 1, b: 2, c: 3, d: 4}
    pickBy(valueIsEven, obj).should.eql({b: 2, d: 4})
    // function is curried: call with just first param to obtain a more specialized function
    const evenValuesOnly = pickBy(valueIsEven)
    evenValuesOnly(obj).should.eql({b: 2, d: 4})
  })
})
