const TH = require('../../../test-helpers')
const toPairs = TH.requireSrcFile('Conversion/toPairs')

describe('toPairs', () => {

  it('should work as expected', () => {
    toPairs({a:1, b:2}).inspect().should.equal('List [ Pair( "a", 1 ), Pair( "b", 2 ) ]')
  })
})
