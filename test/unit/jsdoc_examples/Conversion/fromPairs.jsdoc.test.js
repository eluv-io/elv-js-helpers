// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const fromPairs = TH.requireSrcFile('Conversion/fromPairs')

describe('fromPairs JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const List = TH.requireSrcFile('ADT/List')
    const Pair = TH.requireSrcFile('ADT/Pair')
    const kvPairs = List([Pair('a', 1), Pair('b', 2)])
    fromPairs(kvPairs).should.eql({a: 1, b: 2})
  })
})
