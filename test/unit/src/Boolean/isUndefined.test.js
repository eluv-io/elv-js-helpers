const TH = require('../../../test-helpers')
const isUndefined = TH.requireSrcFile('Boolean/isUndefined')

describe('isUndefined', () => {

  it('should work as expected', () => {
    isUndefined().should.be.true
    isUndefined(undefined).should.be.true
    isUndefined(null).should.be.false
    isUndefined(0).should.be.false
    isUndefined(1, undefined).should.be.false
    isUndefined('foo').should.be.false
    isUndefined(undefined, 1, 2).should.be.true

  })
})
