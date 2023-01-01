const TH = require('../../../test-helpers')
const _throwIfNotResult = TH.requireSrcFile('Validation/_throwIfNotResult')

const Ok = TH.requireSrcFile('ADT/Ok')
const Err = TH.requireSrcFile('ADT/Err')

describe('_throwIfNotResult', () => {
  it('should work as expected', () => {
    TH.expect(()=>_throwIfNotResult(42)).to.throw('Expected a value of type Result, got: Number (42)')
    _throwIfNotResult(Err(['42'])).inspect().should.equal('Err [ "42" ]')
    _throwIfNotResult(Ok(42)).inspect().should.equal('Ok 42')
  })
})
