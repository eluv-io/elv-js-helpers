// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const assertOrdered = TH.requireSrcFile('ModelAssertion/assertOrdered')

describe('assertOrdered JSDoc example', () => {
  it('should execute correctly as described', () => {
    const defArrModel = TH.requireSrcFile('ModelFactory/defArrModel')
    // Note use of spread operator (...) to unpack the array returned by assertOrdered()
    const OrderedNumArrayModel = defArrModel('OrderedArray', Number)
      .extend()
      .assert(...assertOrdered((x, y) => x <= y, 'is not in ascending order'))
      .as('OrderedNumArray')
    OrderedNumArrayModel([1, 2, 3]).should.eql([1, 2, 3])
    OrderedNumArrayModel([]).should.eql([])
    TH.expect(() => OrderedNumArrayModel([3, 2])).to.throw('Value is not in ascending order (got: [3,2])')
    TH.expect(() => OrderedNumArrayModel('foo')).to.throw('expecting Array of Number, got String "foo"')
  })
})
