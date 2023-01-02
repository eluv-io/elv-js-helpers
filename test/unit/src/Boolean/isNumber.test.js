const TH = require('../../../test-helpers')
const isNumber = TH.requireSrcFile('Boolean/isNumber')

// AUTO-GENERATED TEST: Do not modify the following "describe('isNumber JSDoc example', ...)" block:
describe('isNumber JSDoc example', () => {
  it('should execute correctly as described', () => {
    isNumber(1).should.eql(true)
    isNumber(Infinity).should.eql(true)
    isNumber(NaN).should.eql(true)
    isNumber('foo').should.eql(false)
  })
})
