const TH = require('../../../test-helpers')
const isNumber = TH.requireSrcFile('Boolean/isNumber')

describe('isNumber', () => {
  it('should work as expected', () => {
    isNumber(1).should.eql(true)
    isNumber(Infinity).should.eql(true)
    isNumber(NaN).should.eql(true)
    isNumber('foo').should.eql(false)
  })
})
