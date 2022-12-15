// unit test for assocComputed.js

const chai = require('chai')
chai.should()


const assocComputed = require('../../../../src/Functional/assocComputed')

describe('assocComputed', () => {

  it('should work as expected', () => {
    assocComputed('bar', x => x.foo * 2, {foo: 2}).should.eql({foo: 2, bar: 4})
  })

  it('should be curried', () => {
    const addTax = assocComputed('tax', x => x.price * 0.05)
    addTax({product: 'towel', price: 1}).should.eql( {product: 'towel', price: 1, tax: 0.05})
  })
})
