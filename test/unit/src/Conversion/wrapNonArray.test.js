const TH = require('../../../test-helpers')
const wrapNonArray = TH.requireSrcFile('Conversion/wrapNonArray')

describe('wrapNonArray', () => {

  it('should wrap non-array values', () => {
    wrapNonArray(42).should.eql( [42])
  })

  it('should not wrap array values', () => {
    wrapNonArray([42]).should.eql( [42])
    wrapNonArray([[42]]).should.eql( [[42]])
  })

})
