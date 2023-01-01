const TH = require('../../../test-helpers')
const _boundUpperErrMsg = TH.requireSrcFile('ModelAssertion/_boundUpperErrMsg')

describe('_boundUpperErrMsg', () => {
  it('should work as expected', () => {
    _boundUpperErrMsg(42, true).should.equal('must be <= 42')
    _boundUpperErrMsg(42, false).should.equal('must be < 42')
  })
})
