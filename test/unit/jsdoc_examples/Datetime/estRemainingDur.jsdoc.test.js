// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const estRemainingDur = TH.requireSrcFile('Datetime/estRemainingDur')

describe('estRemainingDur JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const resultToPOJO = TH.requireSrcFile('Conversion/resultToPOJO')
    estRemainingDur(21, 0.5).inspect().should.eql('Ok 21')
    estRemainingDur(42, 1).inspect().should.eql('Ok 0')
    const portionBadErr = estRemainingDur(42, 0)
    resultToPOJO(portionBadErr).ok.should.eql(false)
    resultToPOJO(portionBadErr).errMsgs.should.eql(['estRemainingDur: portionComplete must be > 0 and <= 1 (got: 0)'])
    const elapsedBadErr = estRemainingDur(0, 0.1)
    resultToPOJO(elapsedBadErr).ok.should.eql(false)
    resultToPOJO(elapsedBadErr).errMsgs.should.eql(['estRemainingDur: timeElapsed must be > 0 (got: 0)'])
    const bothBadErr = estRemainingDur(0, 0)
    resultToPOJO(bothBadErr).ok.should.eql(false)
    resultToPOJO(bothBadErr).errMsgs.should.eql([
      'estRemainingDur: portionComplete must be > 0 and <= 1 (got: 0)',
      'estRemainingDur: timeElapsed must be > 0 (got: 0)',
    ])
  })
})
