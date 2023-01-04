// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const assertNothing = TH.requireSrcFile('ModelAssertion/assertNothing')

describe('assertNothing JSDoc example', () => {
  it('should execute correctly as described', () => {
    const T = TH.requireSrcFile('Functional/T')
    assertNothing().should.eql([T, ''])
  })
})
