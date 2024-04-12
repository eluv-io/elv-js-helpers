// AUTO-GENERATED TEST - DO NOT MODIFY, CHANGES WILL BE OVERWRITTEN DURING BUILD
const TH = require('../../../test-helpers')
const reFromTemplate = TH.requireSrcFile('Conversion/reFromTemplate')

describe('reFromTemplate JSDoc example', () => {
  it('should execute correctly as described', () => {
    const RE_LETTER = /[a-zA-Z]/
    const RE_DIGIT = /[0-9]/
    const RE_UNICODE_LETTER = /\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/u
    const RE_UNICODE_DIGIT = /\p{Nd}/u
    const RE_LETTER_DIGIT = reFromTemplate`${RE_LETTER}${RE_DIGIT}`
    const RE_UNICODE_LETTER_DIGIT = reFromTemplate`${RE_UNICODE_LETTER}${RE_UNICODE_DIGIT}`
    RE_LETTER_DIGIT.source.should.eql('(?:[a-zA-Z])(?:[0-9])')
    RE_LETTER_DIGIT.flags.should.eql('')
    RE_UNICODE_LETTER_DIGIT.source.should.eql('(?:\\p{Lu}|\\p{Ll}|\\p{Lt}|\\p{Lm}|\\p{Lo})(?:\\p{Nd})')
    RE_UNICODE_LETTER_DIGIT.flags.should.eql('u')
    TH.expect(() => reFromTemplate`${RE_DIGIT}${RE_UNICODE_LETTER}`).to.throw(
      'All interpolated regular expressions must have the same flags (found: ["","u"])'
    )
    RE_LETTER_DIGIT.test('a4').should.eql(true)
    RE_LETTER_DIGIT.test('4a').should.eql(false)
    RE_LETTER_DIGIT.test('Å𝟜').should.eql(false)
    RE_LETTER_DIGIT.test('𝟜Å').should.eql(false)
    RE_UNICODE_LETTER_DIGIT.test('a4').should.eql(true)
    RE_UNICODE_LETTER_DIGIT.test('4a').should.eql(false)
    RE_UNICODE_LETTER_DIGIT.test('Å𝟜').should.eql(true)
    RE_UNICODE_LETTER_DIGIT.test('𝟜Å').should.eql(false)
    // strings are interpolated as literal match
    const FOO_STR = 'foo'
    const BAR_STR = 'bar'
    const RE_FOOBAR = reFromTemplate`^${FOO_STR}${BAR_STR}$`
    RE_FOOBAR.test('foobar').should.eql(true)
    RE_FOOBAR.test('foobarbar').should.eql(false)
    RE_FOOBAR.test('FOOBAR').should.eql(false)
    // if sub-regexps have start/end matchers, it can result in regexps that never match
    const RE_FOO_ONLY = /^foo$/
    const RE_BAR_ONLY = /^bar$/
    const RE_FOOBAR_ONLY = reFromTemplate`^${RE_FOO_ONLY}${RE_BAR_ONLY}$`
    RE_FOOBAR_ONLY.test('foobar').should.eql(false)
    RE_FOOBAR_ONLY.test('foobarbar').should.eql(false)
    RE_FOOBAR_ONLY.test('FOOBAR').should.eql(false)
  })
})
