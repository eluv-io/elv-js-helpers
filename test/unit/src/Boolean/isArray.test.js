const TH = require('../../../test-helpers')
const isArray = TH.requireSrcFile('Boolean/isArray')

// AUTO-GENERATED TEST: Do not modify the following "describe('isArray JSDoc example', ...)" block:
describe('isArray JSDoc example', () => {
  it('should execute correctly as described', () => {
    isArray([1, 2, 3]).should.eql(true)
    isArray(1, 2, 3).should.eql(false)
    isArray('foo').should.eql(false)
  })
})
