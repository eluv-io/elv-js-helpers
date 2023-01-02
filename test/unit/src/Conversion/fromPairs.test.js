const TH = require('../../../test-helpers')
const fromPairs = TH.requireSrcFile('Conversion/fromPairs')

// AUTO-GENERATED TEST: Do not modify the following "describe('fromPairs JSDoc example', ...)" block:
describe('fromPairs JSDoc example', () => {
  it('should execute correctly as described', () => {
    const List = TH.requireSrcFile('ADT/List')
    const Pair = TH.requireSrcFile('ADT/Pair')
    const kvPairs = List([Pair('a', 1), Pair('b', 2)])
    fromPairs(kvPairs).should.eql({a: 1, b: 2})
  })
})
