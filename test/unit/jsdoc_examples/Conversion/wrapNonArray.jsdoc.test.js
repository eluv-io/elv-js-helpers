// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const wrapNonArray = TH.requireSrcFile('Conversion/wrapNonArray')

describe('wrapNonArray JSDoc example', () => {
  it('should execute correctly as described', () => {
    wrapNonArray(42).should.eql([42])
    wrapNonArray([42]).should.eql([42])
    wrapNonArray([0, 42]).should.eql([0, 42])
  })
})
