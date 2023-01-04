const TH = require('../../../test-helpers')
const setArity = TH.requireSrcFile('Functional/setArity')

describe('setArity', () => {
  it('should work as expected', () => {
    const maxOfThree = setArity(3, Math.max)
    const maxNeedTwoMore = maxOfThree(42)
    const maxNeedOneMore = maxNeedTwoMore(0)
    maxNeedOneMore(-42).should.eql(42)
  })
})
