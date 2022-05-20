// unit test for assertOrdered.js

const chai = require('chai')
chai.should()
const expect = chai.expect

const equals = require('ramda/src/equals')

const assertOrdered = require('../../../../src/ModelAssertion/assertOrdered')

const defArrModel = require('../../../../src/ModelFactory/defArrModel')

describe('assertOrdered', () => {
  it('should work as expected', () => {
    const OrderedNumArrayModel = defArrModel('OrderedArray', Number).extend()
      .assert(
        ...assertOrdered(
          (x, y) => x <= y,
          'is not in ascending order'
        )
      )

    equals(OrderedNumArrayModel([1, 2, 3]),[1,2,3]).should.be.true
    equals(OrderedNumArrayModel([]) ,[]).should.be.true
    expect(() => OrderedNumArrayModel([3, 2])).to.throw('Value is not in ascending order (got: [3,2])')
    expect(() => OrderedNumArrayModel('foo')).to.throw('expecting Array of Number, got String "foo"')
  })
})
