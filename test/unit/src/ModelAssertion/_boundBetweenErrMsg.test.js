const TH = require('../../../test-helpers')
const _boundBetweenErrMsg = TH.requireSrcFile('ModelAssertion/_boundBetweenErrMsg')

describe('_boundBetweenErrMsg', () => {
  it('should work as expected', () => {
    _boundBetweenErrMsg(0, 42, true, true) .should.equal('must be >= 0 and <= 42')
    _boundBetweenErrMsg(0, 42, false, false) .should.equal('must be > 0 and < 42')
  })
})
