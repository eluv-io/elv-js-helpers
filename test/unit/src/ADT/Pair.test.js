const TH = require('../../../test-helpers')
const Pair = TH.requireSrcFile('ADT/Pair')

describe('Pair', () => {

  const p = Pair(1,2)

  it('should work as expected', () => {
    p.inspect().should.equal('Pair( 1, 2 )')
    p.fst().should.equal(1)
    p.snd().should.equal(2)
    TH.expect(()=> Pair(42)).to.throw('Pair: Must provide a first and second value')
  })
})
