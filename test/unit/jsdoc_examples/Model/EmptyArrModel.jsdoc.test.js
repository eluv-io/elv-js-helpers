// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const EmptyArrModel = TH.requireSrcFile('Model/EmptyArrModel')

describe('EmptyArrModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    EmptyArrModel([]).should.eql([])
    TH.expect(() => EmptyArrModel(null)).to.throw('expecting Array, got null')
    TH.expect(() => EmptyArrModel(undefined)).to.throw('expecting Array, got undefined')
    TH.expect(() => EmptyArrModel([1])).to.throw('Value must be empty (got: [1])')
    TH.expect(() => EmptyArrModel('')).to.throw('expecting Array, got String ""')
    TH.expect(() => EmptyArrModel(Math.round)).to.throw('expecting Array, got Function')
  })
})
