const TH = require('../../../test-helpers')
const Pair = TH.requireSrcFile('ADT/Pair')

describe('Pair', () => {
  it('should have a working example in JSDoc', () => {
    const p = Pair(1, 2)
    p.inspect().should.eql('Pair( 1, 2 )')
    p.fst().should.eql(1)
    p.snd().should.eql(2)
    TH.expect(() => Pair(42)).to.throw('Pair: Must provide a first and second value')
  })
})
