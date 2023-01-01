const TH = require('../../../test-helpers')
const _typeWithOkErr = TH.requireSrcFile('Validation/_typeWithOkErr')

const Err = TH.requireSrcFile('ADT/Err')
const Ok = TH.requireSrcFile('ADT/Ok')

describe('_typeWithOkErr', () => {
  it('should work as expected', () => {
    _typeWithOkErr(Err(['invalid query'])).should.equal('Err')
    _typeWithOkErr(Ok(42)).should.equal('Ok')
    _typeWithOkErr('foo').should.equal('String')
  })
})
