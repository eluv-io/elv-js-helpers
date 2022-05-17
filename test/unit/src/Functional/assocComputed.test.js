// unit test for assocComputed.js

const chai = require('chai')
chai.should()

const equals = require('ramda/src/equals')

const assocComputed = require('../../../../src/Functional/assocComputed')

describe('assocComputed', () => {

  it('should work as expected', () => {
    equals(assocComputed('bar', x => x.foo * 2, {foo: 2}), {foo: 2, bar: 4}).should.be.true
  })

  it('should be curried', () => {
    const addTax = assocComputed('tax', x => x.price * 0.05)
    equals(addTax({product: 'towel', price: 1}), {product: 'towel', price: 1, tax: 0.05}).should.be.true
  })
})
