// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const _typeWithOkErr = TH.requireSrcFile('Validation/_typeWithOkErr')

describe('_typeWithOkErr JSDoc example', () => {
  it('should execute correctly as described', () => {
    const Err = TH.requireSrcFile('ADT/Err')
    const Ok = TH.requireSrcFile('ADT/Ok')
    _typeWithOkErr(Err(['invalid query'])).should.eql('Err')
    _typeWithOkErr(Ok(42)).should.eql('Ok')
    // use kind() instead to check values other than Ok/Err!
    _typeWithOkErr('foo').should.eql('String')
  })
})
