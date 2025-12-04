// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const NonEmptyArrModel = TH.requireSrcFile('Model/NonEmptyArrModel')

describe('NonEmptyArrModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    NonEmptyArrModel([1]).should.eql([1])
    TH.expect(() => NonEmptyArrModel(null)).to.throw('expecting Array, got null')
    TH.expect(() => NonEmptyArrModel(undefined)).to.throw('expecting Array, got undefined')
    TH.expect(() => NonEmptyArrModel([])).to.throw('Value must not be empty (got: [])')
    TH.expect(() => NonEmptyArrModel('')).to.throw('expecting Array, got String ""')
    TH.expect(() => NonEmptyArrModel(Math.round)).to.throw('expecting Array, got Function')
  })
})
