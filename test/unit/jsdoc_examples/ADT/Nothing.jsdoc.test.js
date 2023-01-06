// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const Nothing = TH.requireSrcFile('ADT/Nothing')

describe('Nothing JSDoc example', () => {
  it('should execute correctly as described', () => {
    Nothing().inspect().should.eql('Nothing')
    Nothing(42).inspect().should.eql('Nothing')
  })
})
