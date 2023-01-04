const TH = require('../../../test-helpers')
const negate = TH.requireSrcFile('Functional/negate')

describe('negate', () => {

  const isEmpty = a => a.length === 0

  it('should work as expected', () => {
    const isNotEmpty = negate(isEmpty)
    isNotEmpty('foo').should.be.true
    isNotEmpty('').should.be.false
    isNotEmpty([]).should.be.false
    isNotEmpty([1, 2, 3]).should.be.true
    TH.expect(() => isNotEmpty(undefined)).to.throw('Cannot read properties of undefined (reading \'length\')')
  })
})
