const TH = require('../../../test-helpers')
const isArray = TH.requireSrcFile('Boolean/isArray')

describe('isArray', () => {

  it('should work as expected', () => {
    isArray([1, 2, 3]).should.be.true
    isArray(1, 2, 3).should.be.false
    isArray('foo').should.be.false
  })

})
