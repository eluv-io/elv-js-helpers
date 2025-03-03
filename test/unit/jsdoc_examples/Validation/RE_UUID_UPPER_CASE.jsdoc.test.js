// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
'use strict'
const TH = require('../../../test-helpers')
const RE_UUID_UPPER_CASE = TH.requireSrcFile('Validation/RE_UUID_UPPER_CASE')

describe('RE_UUID_UPPER_CASE JSDoc example', () => {
  it('should execute correctly as described', () => {
    'use strict'
    RE_UUID_UPPER_CASE.test('0').should.eql(false)
    RE_UUID_UPPER_CASE.test('ABCDEF00-0000-0000-0000-000000000000').should.eql(true)
    RE_UUID_UPPER_CASE.test('abcdef00-0000-0000-0000-000000000000').should.eql(false)
    RE_UUID_UPPER_CASE.test('abcdef00-0000-0000-0000-ABCDEF000000').should.eql(false)
  })
})
