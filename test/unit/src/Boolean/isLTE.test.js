const TH = require('../../../test-helpers')
const isLTE = TH.requireSrcFile('Boolean/isLTE')

// AUTO-GENERATED TEST: Do not modify the following "describe('isLTE JSDoc example', ...)" block:
describe('isLTE JSDoc example', () => {
  it('should execute correctly as described', () => {
    isLTE(42, 1).should.eql(true)
    isLTE(1, 42).should.eql(false)
    isLTE(42, 42).should.eql(true)
    isLTE(null, undefined).should.eql(false)
    isLTE(undefined, null).should.eql(false)
    // function is curried: can call with fewer params to obtain a narrower function
    const notPositive = isLTE(0)
    notPositive(-1).should.eql(true)
    notPositive(0).should.eql(true)
    notPositive(1).should.eql(false)
  })
})
