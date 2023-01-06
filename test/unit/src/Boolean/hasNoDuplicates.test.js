const TH = require('../../../test-helpers')
const hasNoDuplicates = TH.requireSrcFile('Boolean/hasNoDuplicates')

describe('hasNoDuplicates', () => {
  it('should work as expected', () => {
    hasNoDuplicates([]).should.eql(true)
    hasNoDuplicates([1, 2, 3]).should.eql(true)
    hasNoDuplicates([1, 2, 2]).should.eql(false)
    hasNoDuplicates([
      [1, 2],
      [1, 2],
    ]).should.eql(false)
    hasNoDuplicates([
      [1, 2],
      [2, 1],
    ]).should.eql(true)
    hasNoDuplicates([
      [1, 1],
      [2, 2],
    ]).should.eql(true)
    hasNoDuplicates([
      {a: 1, b: 2},
      {b: 2, a: 1},
    ]).should.eql(false)
    TH.expect(() => hasNoDuplicates('foo')).to.throw('hasNoDuplicates() - expecting Array, got: String')
  })
})
