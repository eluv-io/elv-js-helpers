// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const constant = TH.requireSrcFile('Functional/constant')

describe('constant JSDoc example', () => {
  it('should execute correctly as described', () => {
    const always42 = constant(42)
    always42().should.eql(42)
  })
})
