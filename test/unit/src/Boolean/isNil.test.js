const TH = require('../../../test-helpers')
const isNil = TH.requireSrcFile('Boolean/isNil')

// AUTO-GENERATED TEST: Do not modify the following "describe('isNil JSDoc example', ...)" block:
describe('isNil JSDoc example', () => {
  it('should execute correctly as described', () => {
    isNil().should.eql(true)
    isNil(undefined).should.eql(true)
    isNil(null).should.eql(true)
    isNil(42).should.eql(false)
    // extra argument ignored:
    isNil(42, undefined).should.eql(false)
    // extra argument ignored:
    isNil(undefined, 42).should.eql(true)
  })
})
