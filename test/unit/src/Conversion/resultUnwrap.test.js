const TH = require('../../../test-helpers')
const resultUnwrap = TH.requireSrcFile('Conversion/resultUnwrap')

const Err = TH.requireSrcFile('ADT/Err')
const Ok = TH.requireSrcFile('ADT/Ok')

describe('resultUnwrap', () => {
  it('should return contained value for Ok', () => {
    resultUnwrap(Ok(42)).should.equal(42)
  })

  it('should return array contained value for Err', () => {
    resultUnwrap(Err(42)).should.eql( [42])
  })

  it('should throw an error for non-Result values', () => {
    TH.expect(() => resultUnwrap(5)).to.throw('Expected a value of type Result, got: Number (5)')
  })
})
