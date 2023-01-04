// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const _throwIfNotErr = TH.requireSrcFile('Validation/_throwIfNotErr')

describe('_throwIfNotErr JSDoc example', () => {
  it('should execute correctly as described', () => {
    const Err = TH.requireSrcFile('ADT/Err')
    const Ok = TH.requireSrcFile('ADT/Ok')
    TH.expect(() => _throwIfNotErr(42)).to.throw('Expected an Err, got: Number (42)')
    TH.expect(() => _throwIfNotErr(Ok(42))).to.throw('Expected an Err, got: Ok (Ok 42)')
    // No exception thrown:
    _throwIfNotErr(Err('foo'))
  })
})
