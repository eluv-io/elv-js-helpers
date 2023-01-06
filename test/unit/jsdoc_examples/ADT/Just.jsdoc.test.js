// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const Just = TH.requireSrcFile('ADT/Just')

describe('Just JSDoc example', () => {
  it('should execute correctly as described', () => {
    Just(42).inspect().should.eql('Just 42')
  })
})
