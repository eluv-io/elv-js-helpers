// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const _boundBetweenErrMsg = TH.requireSrcFile('ModelAssertion/_boundBetweenErrMsg')

describe('_boundBetweenErrMsg JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    _boundBetweenErrMsg(0, 42, true, true).should.eql('must be >= 0 and <= 42')
    _boundBetweenErrMsg(0, 42, false, false).should.eql('must be > 0 and < 42')
  })
})
