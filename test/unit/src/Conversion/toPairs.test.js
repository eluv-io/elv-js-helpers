const TH = require('../../../test-helpers')
const toPairs = TH.requireSrcFile('Conversion/toPairs')

// AUTO-GENERATED TEST: Do not modify the following "describe('toPairs JSDoc example', ...)" block:
describe('toPairs JSDoc example', () => {
  it('should execute correctly as described', () => {
    const kvPairs = toPairs({a: 1, b: 2})
    kvPairs.inspect().should.eql('List [ Pair( "a", 1 ), Pair( "b", 2 ) ]')
  })
})
