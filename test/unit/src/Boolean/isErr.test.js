const TH = require('../../../test-helpers')
const isErr = TH.requireSrcFile('Boolean/isErr')

// AUTO-GENERATED TEST: Do not modify the following "describe('isErr JSDoc example', ...)" block:
describe('isErr JSDoc example', () => {
  it('should execute correctly as described', () => {
    const Err = TH.requireSrcFile('ADT/Err')
    const Ok = TH.requireSrcFile('ADT/Ok')
    isErr(Err(['invalid query'])).should.eql(true)
    isErr(Ok(42)).should.eql(false)
    isErr('foo').should.eql(false)
  })
})

describe('isErr', () => {
  const Err = TH.requireSrcFile('ADT/Err')
  const Ok = TH.requireSrcFile('ADT/Ok')

  it('should return true for Err', () => {
    isErr(Err(42)).should.be.true
  })

  it('should return false for Ok', () => {
    isErr(Ok(42)).should.be.false
  })

  it('should return false for non-Result values', () => {
    isErr(5).should.be.false
    isErr(undefined).should.be.false
    isErr(null).should.be.false
    isErr('foo').should.be.false
  })
})
