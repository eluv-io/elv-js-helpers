const TH = require('../../../test-helpers')
const hasNoDuplicates = TH.requireSrcFile('Boolean/hasNoDuplicates')

describe('hasNoDuplicates', () => {

  it('should work as described in JSDoc', () => {
    hasNoDuplicates([]).should.equal(true)

    hasNoDuplicates([1, 2, 3]).should.equal(true)

    hasNoDuplicates([1, 2, 2]).should.equal(false)

    hasNoDuplicates([[1, 2], [1, 2]]).should.equal(false)

    hasNoDuplicates([[1, 2], [2, 1]]).should.equal(true)

    hasNoDuplicates([[1, 1], [2, 2]]).should.equal(true)

    hasNoDuplicates([{a: 1, b: 2}, {b: 2, a: 1}]).should.equal(false)

    TH.expect(() => hasNoDuplicates('foo')).to.throw('hasNoDuplicates() - expecting Array, got: String')

  })

})
