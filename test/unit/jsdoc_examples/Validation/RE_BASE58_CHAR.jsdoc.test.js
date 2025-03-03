// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const RE_BASE58_CHAR = TH.requireSrcFile('Validation/RE_BASE58_CHAR')

describe('RE_BASE58_CHAR JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    RE_BASE58_CHAR.test('1').should.eql(true)
    RE_BASE58_CHAR.test('l').should.eql(false)
    RE_BASE58_CHAR.test('l1l').should.eql(true)
    const reFromTemplate = TH.requireSrcFile('Conversion/reFromTemplate')
    const RE_SINGLE_BASE58_CHAR = reFromTemplate`^${RE_BASE58_CHAR}$`
    RE_SINGLE_BASE58_CHAR.test('1').should.eql(true)
    RE_SINGLE_BASE58_CHAR.test('l').should.eql(false)
    RE_SINGLE_BASE58_CHAR.test('l1l').should.eql(false)
  })
})
