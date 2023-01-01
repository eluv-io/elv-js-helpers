const TH = require('../../../test-helpers')
const compare = TH.requireSrcFile('Functional/compare')

describe('compare', () => {

  it('should work as expected', () => {
    compare(1, 2).should.equal(-1)
    compare(2, 2).should.equal(0)
    compare(2, 1).should.equal(1)
    compare('a', 'b').should.equal(-1)
    compare(null, undefined).should.equal(0)
    compare(undefined, null).should.equal(0)
    compare([1], 'a').should.equal(-1)
  })
})
