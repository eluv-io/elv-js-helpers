// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const RE_UUID = TH.requireSrcFile('Validation/RE_UUID')

describe('RE_UUID JSDoc example', () => {
  it('should execute correctly as described', () => {
    RE_UUID.test('0').should.eql(false)
    RE_UUID.test('ABCDEF00-0000-0000-0000-000000000000').should.eql(true)
    RE_UUID.test('abcdef00-0000-0000-0000-000000000000').should.eql(true)
    RE_UUID.test('abcdef00-0000-0000-0000-ABCDEF000000').should.eql(true)
  })
})
