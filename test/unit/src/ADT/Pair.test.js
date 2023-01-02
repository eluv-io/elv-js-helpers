const TH = require('../../../test-helpers')
const Pair = TH.requireSrcFile('ADT/Pair')

// AUTO-GENERATED TEST: Do not modify the following "describe('Pair JSDoc example', ...)" block:
describe('Pair JSDoc example', () => {
  it('should execute correctly as described', () => {
    const p = Pair(1, 2)
    p.inspect().should.eql('Pair( 1, 2 )')
    p.fst().should.eql(1)
    p.snd().should.eql(2)
    TH.expect(() => Pair(42)).to.throw('Pair: Must provide a first and second value')
  })
})
