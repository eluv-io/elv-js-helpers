// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const isResult = TH.requireSrcFile('Boolean/isResult')

describe('isResult JSDoc example', () => {
  it('should execute correctly as described', () => {
    const Err = TH.requireSrcFile('ADT/Err')
    const Ok = TH.requireSrcFile('ADT/Ok')
    isResult(Err(['invalid query'])).should.eql(true)
    isResult(Ok(42)).should.eql(true)
    isResult('foo').should.eql(false)
  })
})
