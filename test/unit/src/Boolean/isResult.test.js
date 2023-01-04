const TH = require('../../../test-helpers')
const isResult = TH.requireSrcFile('Boolean/isResult')

describe('isResult', () => {

  const Err = TH.requireSrcFile('ADT/Err')
  const Ok = TH.requireSrcFile('ADT/Ok')

  it('should work as expected', () => {
    isResult(Err(['invalid query'])).should.be.true
    isResult(Ok(42)).should.be.true
    isResult('foo').should.be.false
  })
})
