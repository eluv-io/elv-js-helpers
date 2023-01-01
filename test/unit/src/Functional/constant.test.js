const TH = require('../../../test-helpers')
const constant = TH.requireSrcFile('Functional/constant')

describe('constant', () => {

  it('should work as expected', () => {
    const always42 = constant(42)
    always42().should.equal(42)
  })
})
