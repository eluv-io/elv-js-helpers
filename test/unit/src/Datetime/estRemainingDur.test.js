// unit test for estRemainingDur.js

const chai = require('chai')
chai.should()

const estRemainingDur = require('../../../../src/Datetime/estRemainingDur')

const resultUnwrap = require('../../../../src/Conversion/resultUnwrap')

describe('estRemainingDur', () => {
  it('should work as expected', () => {
    estRemainingDur(21, 0.5).inspect().should.equal('Ok 21')
    estRemainingDur(42, 1).inspect().should.equal('Ok 0')

    resultUnwrap(estRemainingDur(42, 0))[0].toString().should.equal('estRemainingDur: portionComplete must be > 0 and <= 1 (got: 0)')
    resultUnwrap(estRemainingDur(0, .1))[0].toString().should.equal('estRemainingDur: timeElapsed must be > 0 (got: 0)')

    resultUnwrap(estRemainingDur(0, 0))[0].toString().should.equal('estRemainingDur: portionComplete must be > 0 and <= 1 (got: 0)')
    resultUnwrap(estRemainingDur(0, 0))[1].toString().should.equal('estRemainingDur: timeElapsed must be > 0 (got: 0)')

    resultUnwrap(estRemainingDur(-1, .1))[0].toString().should.equal('estRemainingDur: timeElapsed must be > 0 (got: -1)')
    resultUnwrap(estRemainingDur(42, 42))[0].toString().should.equal('estRemainingDur: portionComplete must be > 0 and <= 1 (got: 42)')

    resultUnwrap(estRemainingDur(42, undefined))[0].toString().should.equal('estRemainingDur: expecting portionComplete to be Number, got undefined')
  })
})
