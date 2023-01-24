const TH = require('../../../test-helpers')
const assertOrdered = TH.requireSrcFile('ModelAssertion/assertOrdered')

describe('assertOrdered', () => {

  const defArrayModel = TH.requireSrcFile('ModelFactory/defArrayModel')

  it('should work as expected', () => {
    const OrderedNumArrayModel = defArrayModel('OrderedArray', Number).extend()
      .assert(
        ...assertOrdered(
          (x, y) => x <= y,
          'is not in ascending order'
        )
      )

    OrderedNumArrayModel([1, 2, 3]).should.eql([1,2,3])
    OrderedNumArrayModel([]).should.eql([])
    TH.expect(() => OrderedNumArrayModel([3, 2])).to.throw('Value is not in ascending order (got: [3,2])')
    TH.expect(() => OrderedNumArrayModel('foo')).to.throw('expecting Array of Number, got String "foo"')
  })
})
