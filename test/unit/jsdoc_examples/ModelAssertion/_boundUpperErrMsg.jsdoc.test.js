// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const _boundUpperErrMsg = TH.requireSrcFile('ModelAssertion/_boundUpperErrMsg')

describe('_boundUpperErrMsg JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    _boundUpperErrMsg(42, true).should.eql('must be <= 42')
    _boundUpperErrMsg(42, false).should.eql('must be < 42')
  })
})
