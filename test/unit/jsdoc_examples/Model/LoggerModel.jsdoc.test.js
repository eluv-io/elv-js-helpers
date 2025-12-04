// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const LoggerModel = TH.requireSrcFile('Model/LoggerModel')

describe('LoggerModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const throwsException = TH.requireSrcFile('Boolean/throwsException')
    throwsException(() => LoggerModel(console)).should.eql(false)
    throwsException(() => LoggerModel(console).log('foo')).should.eql(false)
    TH.expect(() => LoggerModel(Math)).to.throw('expecting assert to be Function, got undefined')
    TH.expect(() => LoggerModel(Math.round)).to.throw('expecting assert to be Function, got undefined')
    TH.expect(() => LoggerModel([])).to.throw('expecting assert to be Function, got undefined')
    TH.expect(() => LoggerModel(null)).to.throw('expecting Object, got null')
    TH.expect(() => LoggerModel(undefined)).to.throw('expecting assert to be Function, got undefined')
    TH.expect(() => LoggerModel([1])).to.throw('expecting assert to be Function, got undefined')
    TH.expect(() => LoggerModel('')).to.throw('expecting Object, got String ""')
  })
})
