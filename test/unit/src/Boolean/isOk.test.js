const TH = require('../../../test-helpers')
const isOk = TH.requireSrcFile('Boolean/isOk')

const Err = TH.requireSrcFile('ADT/Err')
const Ok = TH.requireSrcFile('ADT/Ok')

describe('isErr', () => {

  it('should return true for Ok', () => {
    isOk(Ok(42)).should.be.true
  })

  it('should return false for Err', () => {
    isOk(Err(42)).should.be.false
  })

  it('should return false for non-Result values', () => {
    isOk(5).should.be.false
    isOk(undefined).should.be.false
    isOk(null).should.be.false
    isOk('foo').should.be.false
  })

})
