const TH = require('../../../test-helpers')
const _throwIfNotErr = TH.requireSrcFile('Validation/_throwIfNotErr')

const Err = TH.requireSrcFile('ADT/Err')
const Ok = TH.requireSrcFile('ADT/Ok')

describe('_throwIfNotErr', () => {

  it('should work as expected', () => {
    TH.expect(()=>_throwIfNotErr(42)).to.throw('Expected an Err, got: Number (42)')
    TH.expect(()=>_throwIfNotErr(Ok(42))).to.throw('Expected an Err, got: Ok (Ok 42)')
    _throwIfNotErr(Err(['foo'])).inspect().should.equal('Err [ "foo" ]')
  })
})
