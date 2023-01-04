const TH = require('../../../test-helpers')
const isLTE = TH.requireSrcFile('Boolean/isLTE')

describe('isLTE', () => {
  it('should work as expected', () => {
    isLTE(42, 1).should.eql(true)
    isLTE(1, 42).should.eql(false)
    isLTE(42, 42).should.eql(true)
    isLTE(null, undefined).should.eql(false)
    isLTE(undefined, null).should.eql(false)
  })

  it('should be curried', () => {
    const notPositive = isLTE(0)
    notPositive(-1).should.eql(true)
    notPositive(0).should.eql(true)
    notPositive(1).should.eql(false)
  })
})
