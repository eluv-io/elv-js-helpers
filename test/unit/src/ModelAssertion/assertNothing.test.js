const TH = require('../../../test-helpers')
const assertNothing = TH.requireSrcFile('ModelAssertion/assertNothing')

describe('assertNothing', () => {
  it('should work as expected', () => {
    assertNothing()[0]().should.be.true
    assertNothing()[1].should.equal( '')
  })
})
