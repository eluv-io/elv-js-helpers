const TH = require('../../../test-helpers')
const resultUnwrap = TH.requireSrcFile('Conversion/resultUnwrap')

// AUTO-GENERATED TEST: Do not modify the following "describe('resultUnwrap JSDoc example', ...)" block:
describe('resultUnwrap JSDoc example', () => {
  it('should execute correctly as described', () => {
    const Err = TH.requireSrcFile('ADT/Err')
    const Ok = TH.requireSrcFile('ADT/Ok')
    resultUnwrap(Err(['invalid query'])).should.eql(['invalid query'])
    resultUnwrap(Ok(42)).should.eql(42)
  })
})

describe('resultUnwrap', () => {
  const Err = TH.requireSrcFile('ADT/Err')
  const Ok = TH.requireSrcFile('ADT/Ok')

  it('should return contained value for Ok', () => {
    resultUnwrap(Ok(42)).should.equal(42)
  })

  it('should return array contained value for Err', () => {
    resultUnwrap(Err(42)).should.eql([42])
  })

  it('should throw an error for non-Result values', () => {
    TH.expect(() => resultUnwrap(5)).to.throw('Expected a value of type Result, got: Number (5)')
  })
})
