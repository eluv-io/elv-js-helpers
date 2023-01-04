const TH = require('../../../test-helpers')
const isFunction = TH.requireSrcFile('Boolean/isFunction')

describe('isFunction', () => {

  it('should work as expected', () => {
    isFunction([1, 2, 3]).should.be.false
    isFunction(1, 2, 3).should.be.false
    isFunction('foo').should.be.false
    isFunction(isFunction).should.be.true
  })

})
