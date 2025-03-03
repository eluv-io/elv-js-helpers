// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const resultUnwrap = TH.requireSrcFile('Conversion/resultUnwrap')

describe('resultUnwrap JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    const Err = TH.requireSrcFile('ADT/Err')
    const Ok = TH.requireSrcFile('ADT/Ok')
    resultUnwrap(Err(['invalid query'])).should.eql(['invalid query'])
    resultUnwrap(Ok(42)).should.eql(42)
  })
})
