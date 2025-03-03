// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const NonBlankStrModel = TH.requireSrcFile('Model/NonBlankStrModel')

describe('NonBlankStrModel JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    NonBlankStrModel('foo').should.eql('foo')
    TH.expect(() => NonBlankStrModel('  ')).to.throw('Value must not be a blank string (got: "  ")')
    TH.expect(() => NonBlankStrModel(42)).to.throw('expecting String, got Number 42')
  })
})
