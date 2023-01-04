// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const assocComputed = TH.requireSrcFile('Functional/assocComputed')

describe('assocComputed JSDoc example', () => {
  it('should execute correctly as described', () => {
    assocComputed('bar', x => x.foo * 2, {foo: 2}).should.eql({foo: 2, bar: 4})
    // function is curried: call with fewer than 3 args to obtain a narrower function
    const addTax = assocComputed('tax', x => x.price * 0.05)
    addTax({product: 'towel', price: 1}).should.eql({product: 'towel', price: 1, tax: 0.05})
  })
})
