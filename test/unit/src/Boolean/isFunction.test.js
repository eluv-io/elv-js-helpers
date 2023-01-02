const TH = require('../../../test-helpers')
const isFunction = TH.requireSrcFile('Boolean/isFunction')

// AUTO-GENERATED TEST: Do not modify the following "describe('isFunction JSDoc example', ...)" block:
describe('isFunction JSDoc example', () => {
  it('should execute correctly as described', () => {
    isFunction([1, 2, 3]).should.eql(false)
    isFunction(1, 2, 3).should.eql(false)
    isFunction('foo').should.eql(false)
    isFunction(isFunction).should.eql(true)
  })
})
