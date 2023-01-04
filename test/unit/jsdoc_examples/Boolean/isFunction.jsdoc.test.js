// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const isFunction = TH.requireSrcFile('Boolean/isFunction')

describe('isFunction JSDoc example', () => {
  it('should execute correctly as described', () => {
    isFunction([1, 2, 3]).should.eql(false)
    isFunction(1, 2, 3).should.eql(false)
    isFunction('foo').should.eql(false)
    isFunction(isFunction).should.eql(true)
  })
})
