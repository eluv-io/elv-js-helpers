const TH = require('../../../test-helpers')
const failsModelCheck = TH.requireSrcFile('Boolean/failsModelCheck')

describe('failsModelCheck', () => {

  const PositiveIntModel = TH.requireSrcFile('Model/PositiveIntModel')

  it('should work as expected', () => {
    failsModelCheck(PositiveIntModel, 1).should.be.false
    failsModelCheck(PositiveIntModel, -1).should.be.true
  })

  it('should be curried', () => {
    const isNotPositiveInt = failsModelCheck(PositiveIntModel)
    isNotPositiveInt(1).should.be.false
    isNotPositiveInt(0).should.be.true
    isNotPositiveInt('foo').should.be.true
  })
})
