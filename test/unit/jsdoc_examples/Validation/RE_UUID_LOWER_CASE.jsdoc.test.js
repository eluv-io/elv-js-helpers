// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const RE_UUID_LOWER_CASE = TH.requireSrcFile('Validation/RE_UUID_LOWER_CASE')

describe('RE_UUID_LOWER_CASE JSDoc example', () => {
  it('should execute correctly as described', () => {
    RE_UUID_LOWER_CASE.test('0').should.eql(false)
    RE_UUID_LOWER_CASE.test('ABCDEF00-0000-0000-0000-000000000000').should.eql(false)
    RE_UUID_LOWER_CASE.test('abcdef00-0000-0000-0000-000000000000').should.eql(true)
    RE_UUID_LOWER_CASE.test('abcdef00-0000-0000-0000-ABCDEF000000').should.eql(false)
  })
})
