const TH = require('../../../test-helpers')
const isOfKind = TH.requireSrcFile('Boolean/isOfKind')

// AUTO-GENERATED TEST: Do not modify the following "describe('isOfKind JSDoc example', ...)" block:
describe('isOfKind JSDoc example', () => {
  it('should execute correctly as described', () => {
    isOfKind('Array', [1, 2, 3]).should.eql(true)
    isOfKind('Array', 1, 2, 3).should.eql(false)
    isOfKind('Array', 'foo').should.eql(false)
  })
})

describe('isOfKind', () => {
  const Err = TH.requireSrcFile('ADT/Err')
  const Ok = TH.requireSrcFile('ADT/Ok')

  it('should return true if kind matches', () => {
    isOfKind('Array', [1, 2, 3]).should.be.true
  })

  it('should return false if kind does not match', () => {
    isOfKind('Array', 'foo').should.be.false
    isOfKind('Array', 1, 2, 3).should.be.false
    isOfKind('Array', undefined).should.be.false
    isOfKind('Array', null).should.be.false
    isOfKind('Array', Ok([1, 2, 3])).should.be.false
    isOfKind('Array', Err([1, 2, 3])).should.be.false
  })
})
