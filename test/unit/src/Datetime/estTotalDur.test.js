const TH = require('../../../test-helpers')
const estTotalDur = TH.requireSrcFile('Datetime/estTotalDur')

describe('estTotalDur', () => {

  const resultUnwrap = TH.requireSrcFile('Conversion/resultUnwrap')

  it('should work as expected', () => {
    estTotalDur(21, 0.5).inspect().should.equal('Ok 42')
    estTotalDur(42, 1).inspect().should.equal('Ok 42')

    resultUnwrap(estTotalDur(42, 0))[0].toString().should.equal('estTotalDur: portionComplete must be > 0 and <= 1 (got: 0)')
    resultUnwrap(estTotalDur(0, .1) )[0].toString().should.equal('estTotalDur: timeElapsed must be > 0 (got: 0)')

    resultUnwrap(estTotalDur(0, 0) )[0].toString().should.equal( 'estTotalDur: portionComplete must be > 0 and <= 1 (got: 0)' )
    resultUnwrap(estTotalDur(0, 0) )[1].toString().should.equal('estTotalDur: timeElapsed must be > 0 (got: 0)')

    resultUnwrap(estTotalDur(-1, .1) )[0].toString().should.equal('estTotalDur: timeElapsed must be > 0 (got: -1)')
    resultUnwrap(estTotalDur(42, 42)  )[0].toString().should.equal('estTotalDur: portionComplete must be > 0 and <= 1 (got: 42)')
  })
})
