const isRegExp = require('../Boolean/isRegExp')

const uniq = require('../Functional/uniq')

const throwError = require('../Misc/throwError')

const _strOrRegExSrc = require('./_strOrRegExSrc')

/**
 * [Javascript tagged template function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)
 * to allow composing regular expressions.
 *
 * Throws an exception if all sub-regexes do not have the same flags.
 *
 * @function
 * @category Conversion
 * @sig [string], ...stringsAndOrRegExps -> RegExp | EXCEPTION
 * @returns {RegExp}
 * @example
 *
 * const reFromTemplate = require('@eluvio/elv-js-helpers/Conversion/reFromTemplate')
 *
 * const RE_LETTER = /[a-zA-Z]/
 * const RE_DIGIT = /[0-9]/
 *
 * const RE_UNICODE_LETTER = /\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/u
 * const RE_UNICODE_DIGIT = /\p{Nd}/u
 *
 * const RE_LETTER_DIGIT = reFromTemplate`${RE_LETTER}${RE_DIGIT}`
 *
 * const RE_UNICODE_LETTER_DIGIT = reFromTemplate`${RE_UNICODE_LETTER}${RE_UNICODE_DIGIT}`
 *
 * RE_LETTER_DIGIT.source                           //=> '(?:[a-zA-Z])(?:[0-9])'
 * RE_LETTER_DIGIT.flags                            //=> ''
 *
 * RE_UNICODE_LETTER_DIGIT.source                   //=> '(?:\\p{Lu}|\\p{Ll}|\\p{Lt}|\\p{Lm}|\\p{Lo})(?:\\p{Nd})'
 * RE_UNICODE_LETTER_DIGIT.flags                    //=> 'u'
 *
 * reFromTemplate`${RE_DIGIT}${RE_UNICODE_LETTER}`  //=> EXCEPTION: 'All interpolated regular expressions must have the same flags (found: ["","u"])'
 *
 * RE_LETTER_DIGIT.test('a4')                       //=> true
 * RE_LETTER_DIGIT.test('4a')                       //=> false
 * RE_LETTER_DIGIT.test('Å𝟜')                      //=> false
 * RE_LETTER_DIGIT.test('𝟜Å')                      //=> false
 *
 * RE_UNICODE_LETTER_DIGIT.test('a4')               //=> true
 * RE_UNICODE_LETTER_DIGIT.test('4a')               //=> false
 * RE_UNICODE_LETTER_DIGIT.test('Å𝟜')               //=> true
 * RE_UNICODE_LETTER_DIGIT.test('𝟜Å')               //=> false
 *
 * // strings are interpolated as literal match
 * const FOO_STR = 'foo'
 * const BAR_STR = 'bar'
 *
 * const RE_FOOBAR = reFromTemplate`^${FOO_STR}${BAR_STR}$`
 *
 * RE_FOOBAR.test('foobar')                              //=> true
 * RE_FOOBAR.test('foobarbar')                           //=> false
 * RE_FOOBAR.test('FOOBAR')                              //=> false
 *
 * // if sub-regexps have start/end matchers, it can result in regexps that never match
 * const RE_FOO_ONLY = /^foo$/
 * const RE_BAR_ONLY = /^bar$/
 * const RE_FOOBAR_ONLY = reFromTemplate`^${RE_FOO_ONLY}${RE_BAR_ONLY}$`
 *
 * RE_FOOBAR_ONLY.test('foobar')                        //=> false
 * RE_FOOBAR_ONLY.test('foobarbar')                     //=> false
 * RE_FOOBAR_ONLY.test('FOOBAR')                        //=> false
 *
 */
const reFromTemplate = (strings, ...expressions) => {
  // make sure any sub-regexes have identical flags
  const flags = uniq(expressions.filter(isRegExp).map(x => x.flags))
  if (flags.length > 1) throwError(`All interpolated regular expressions must have the same flags (found: ${JSON.stringify(flags)})`)

  return new RegExp(
    strings.raw.map(
      (rawLiteralStringPiece, literalPieceIndex) => rawLiteralStringPiece + (
        expressions[literalPieceIndex] === undefined // a trailing last literal piece (if present) will not have an associated expression
          ? ''
          : '(?:' + _strOrRegExSrc(expressions[literalPieceIndex]) + ')'
      )
    ).join(''),
    flags.length === 1
      ? flags[0]
      : ''
  )
}

module.exports = reFromTemplate
