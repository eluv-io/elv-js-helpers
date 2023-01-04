const TH = require('../../../test-helpers')
const isNull = TH.requireSrcFile('Boolean/isNull')

describe('isNull', () => {

  it('should work as expected', () => {
    isNull(null).should.be.true
    isNull(undefined).should.be.false
    isNull(0).should.be.false
    isNull('foo').should.be.false
  })

  it('should work with no arguments', () => {
    isNull().should.be.false
  })

  it('should ignore extra arguments', () => {
    isNull(1, null, null).should.be.false
    isNull(null, 1, 2).should.be.true
  })
})
