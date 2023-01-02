const TH = require('../../../test-helpers')
const isResult = TH.requireSrcFile('Boolean/isResult')

// AUTO-GENERATED TEST: Do not modify the following "describe('isResult JSDoc example', ...)" block:
describe('isResult JSDoc example', () => {
  it('should execute correctly as described', () => {
    const Err = TH.requireSrcFile('ADT/Err')
    const Ok = TH.requireSrcFile('ADT/Ok')
    isResult(Err(['invalid query'])).should.eql(true)
    isResult(Ok(42)).should.eql(true)
    isResult('foo').should.eql(false)
  })
})
