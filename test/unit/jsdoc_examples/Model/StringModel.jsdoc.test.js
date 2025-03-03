// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const StringModel = TH.requireSrcFile('Model/StringModel')

describe('StringModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    StringModel('foo').should.eql('foo')
    TH.expect(() => StringModel(42)).to.throw('expecting String, got Number 42')
  })
})
