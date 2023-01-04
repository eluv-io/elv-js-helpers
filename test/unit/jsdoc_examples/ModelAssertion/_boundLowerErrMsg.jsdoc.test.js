// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const _boundLowerErrMsg = TH.requireSrcFile('ModelAssertion/_boundLowerErrMsg')

describe('_boundLowerErrMsg JSDoc example', () => {
  it('should execute correctly as described', () => {
    _boundLowerErrMsg(42, true).should.eql('must be >= 42')
    _boundLowerErrMsg(42, false).should.eql('must be > 42')
  })
})
