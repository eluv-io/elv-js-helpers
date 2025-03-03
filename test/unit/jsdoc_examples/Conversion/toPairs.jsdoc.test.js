// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const toPairs = TH.requireSrcFile('Conversion/toPairs')

describe('toPairs JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const kvPairs = toPairs({a: 1, b: 2})
    kvPairs.inspect().should.eql('List [ Pair( "a", 1 ), Pair( "b", 2 ) ]')
  })
})
