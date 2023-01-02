const TH = require('../../../test-helpers')
const isOk = TH.requireSrcFile('Boolean/isOk')

// AUTO-GENERATED TEST: Do not modify the following "describe('isOk JSDoc example', ...)" block:
describe('isOk JSDoc example', () => {
  it('should execute correctly as described', () => {
    const Err = TH.requireSrcFile('ADT/Err')
    const Ok = TH.requireSrcFile('ADT/Ok')
    isOk(Err(['invalid query'])).should.eql(false)
    isOk(Ok(42)).should.eql(true)
    isOk('foo').should.eql(false)
  })
})

describe('isOk', () => {
  const Err = TH.requireSrcFile('ADT/Err')
  const Ok = TH.requireSrcFile('ADT/Ok')

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
