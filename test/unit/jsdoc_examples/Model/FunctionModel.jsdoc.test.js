// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const FunctionModel = TH.requireSrcFile('Model/FunctionModel')

describe('FunctionModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    FunctionModel(Math.round).should.eql(Math.round)
    TH.expect(() => FunctionModel([])).to.throw('expecting Function, got Array []')
    TH.expect(() => FunctionModel(null)).to.throw('expecting Function, got null')
    TH.expect(() => FunctionModel(undefined)).to.throw('expecting Function, got undefined')
    TH.expect(() => FunctionModel([1])).to.throw('expecting Function, got Array [1]')
    TH.expect(() => FunctionModel('')).to.throw('expecting Function, got String ""')
  })
})
