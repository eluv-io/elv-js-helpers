// unit test for assertOrdered.js

const chai = require('chai')
chai.should()
const expect = chai.expect



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

    OrderedNumArrayModel([1, 2, 3]).should.eql([1,2,3])
    OrderedNumArrayModel([]).should.eql([])
    expect(() => OrderedNumArrayModel([3, 2])).to.throw('Value is not in ascending order (got: [3,2])')
    expect(() => OrderedNumArrayModel('foo')).to.throw('expecting Array of Number, got String "foo"')
  })
})
