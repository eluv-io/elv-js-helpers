const TH = require('../../../test-helpers')
const isUndefined = TH.requireSrcFile('Boolean/isUndefined')

// AUTO-GENERATED TEST: Do not modify the following "describe('isUndefined JSDoc example', ...)" block:
describe('isUndefined JSDoc example', () => {
  it('should execute correctly as described', () => {
    isUndefined().should.eql(true)
    isUndefined(undefined).should.eql(true)
    isUndefined(null).should.eql(false)
    // extra argument ignored:
    isUndefined(1, undefined).should.eql(false)
    isUndefined('foo').should.eql(false)
    // extra argument ignored:
    isUndefined(undefined, 3).should.eql(true)
  })
})
