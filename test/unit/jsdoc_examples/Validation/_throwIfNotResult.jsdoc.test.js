// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const _throwIfNotResult = TH.requireSrcFile('Validation/_throwIfNotResult')

describe('_throwIfNotResult JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const Err = TH.requireSrcFile('ADT/Err')
    const Ok = TH.requireSrcFile('ADT/Ok')
    TH.expect(() => _throwIfNotResult(42)).to.throw('Expected a value of type Result, got: Number (42)')
    _throwIfNotResult(Err(['42']))
      .inspect()
      .should.eql('Err [ "42" ]')
    _throwIfNotResult(Ok(42)).inspect().should.eql('Ok 42')
  })
})
