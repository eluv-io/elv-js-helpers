const TH = require('../../../test-helpers')
const boolsToInt = TH.requireSrcFile('Conversion/boolsToInt')

describe('boolsToInt', () => {

  it('should work as expected', () => {
    boolsToInt([false, false, true]).should.equal(1)
    boolsToInt([true, false]).should.equal(2)
    boolsToInt([true, true, true]).should.equal(7)
  })
})
