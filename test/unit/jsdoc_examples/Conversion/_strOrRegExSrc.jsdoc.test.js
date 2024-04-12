// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const _strOrRegExSrc = TH.requireSrcFile('Conversion/_strOrRegExSrc')

describe('_strOrRegExSrc JSDoc example', () => {
  it('should execute correctly as described', () => {
    const RE_UUID_LOWER_CASE = TH.requireSrcFile('Validation/RE_UUID_LOWER_CASE')
    _strOrRegExSrc(RE_UUID_LOWER_CASE).should.eql('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$')
    _strOrRegExSrc('foo').should.eql('foo')
    TH.expect(() => _strOrRegExSrc(3)).to.throw('Value is not a RegExp or string (3)')
  })
})
