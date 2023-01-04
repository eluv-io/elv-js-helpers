// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const estTotalDur = TH.requireSrcFile('Datetime/estTotalDur')

describe('estTotalDur JSDoc example', () => {
  it('should execute correctly as described', () => {
    const resultToPOJO = TH.requireSrcFile('Conversion/resultToPOJO')
    estTotalDur(21, 0.5).inspect().should.eql('Ok 42')
    estTotalDur(42, 1).inspect().should.eql('Ok 42')
    const portionBadErr = estTotalDur(42, 0)
    resultToPOJO(portionBadErr).ok.should.eql(false)
    resultToPOJO(portionBadErr).errMsgs // => ['estTotalDur: portionComplete must be > 0 and <= 1 (got: 0)']
    const elapsedBadErr = estTotalDur(0, 0.1)
    resultToPOJO(elapsedBadErr).ok.should.eql(false)
    resultToPOJO(elapsedBadErr).errMsgs.should.eql(['estTotalDur: timeElapsed must be > 0 (got: 0)'])
    const bothBadErr = estTotalDur(0, 0)
    resultToPOJO(bothBadErr).ok.should.eql(false)
    resultToPOJO(bothBadErr).errMsgs //=>['estTotalDur: portionComplete must be > 0 and <= 1 (got: 0)', 'estTotalDur: timeElapsed must be > 0 (got: 0)']
  })
})
