// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const AnyModel = TH.requireSrcFile('Model/AnyModel')

describe('AnyModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    AnyModel([]).should.eql([])
    TH.chai.assert.deepEqual(AnyModel(null), null)
    TH.chai.assert.deepEqual(AnyModel(undefined), undefined)
    AnyModel([1]).should.eql([1])
    AnyModel('').should.eql('')
    AnyModel(Math.round).should.eql(Math.round)
  })
})
