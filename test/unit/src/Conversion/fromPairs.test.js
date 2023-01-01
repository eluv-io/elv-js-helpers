const TH = require('../../../test-helpers')
const fromPairs = TH.requireSrcFile('Conversion/fromPairs')

const List = TH.requireSrcFile('ADT/List')
const Pair = TH.requireSrcFile('ADT/Pair')

describe('fromPairs', () => {

  it('should work as expected', () => {
    const kvPairs = List([Pair('a', 1), Pair('b', 2)])
    fromPairs(kvPairs).should.eql({a: 1, b: 2})
  })
})
