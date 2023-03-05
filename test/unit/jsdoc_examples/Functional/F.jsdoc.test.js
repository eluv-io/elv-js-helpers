// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const F = TH.requireSrcFile('Functional/F')

describe('F JSDoc example', () => {
  it('should execute correctly as described', () => {
    F(42).should.eql(false)
    F().should.eql(false)
  })
})
