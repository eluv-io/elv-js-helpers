// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const Ok = TH.requireSrcFile('ADT/Ok')

describe('Ok JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    Ok(42).inspect().should.eql('Ok 42')
  })
})
