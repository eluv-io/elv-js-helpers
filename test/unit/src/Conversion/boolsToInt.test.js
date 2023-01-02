const TH = require('../../../test-helpers')
const boolsToInt = TH.requireSrcFile('Conversion/boolsToInt')

// AUTO-GENERATED TEST: Do not modify the following "describe('boolsToInt JSDoc example', ...)" block:
describe('boolsToInt JSDoc example', () => {
  it('should execute correctly as described', () => {
    boolsToInt([false, false, true]).should.eql(1)
    boolsToInt([true, false]).should.eql(2)
    boolsToInt([true, true, true]).should.eql(7)
  })
})
