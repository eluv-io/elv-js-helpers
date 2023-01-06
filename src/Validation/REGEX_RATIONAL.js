/**
 * [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) used for
 * validation of rational numbers expressed as strings of form x, -x, x/y, or -x/y, where x and y are integers and
 * y !== 0.
 *
 * Leading zeroes are allowed.
 *
 * Capture groups parse the string into separate matches for numerator and slash+denominator.
 *
 * @constant
 * @default
 * @type {RegExp}
 * @category Constant
 * @example
 *
 * const REGEX_RATIONAL = require('@eluvio/elv-js-helpers/Validation/REGEX_RATIONAL')
 *
 * REGEX_RATIONAL.test('0')                              //=> true
 *
 * REGEX_RATIONAL.test('-0')                             //=> true
 *
 * REGEX_RATIONAL.test('0/1')                            //=> true
 *
 * REGEX_RATIONAL.test('0/010')                          //=> true
 *
 * REGEX_RATIONAL.test('1/0')                            //=> false
 *
 * REGEX_RATIONAL.test('-0')                             //=> true
 *
 * REGEX_RATIONAL.test('3.14')                           //=> false
 *
 * REGEX_RATIONAL.test('9 1/2')                          //=> false
 *
 * REGEX_RATIONAL.test('19/2')                           //=> false
 *
 * REGEX_RATIONAL.test('007')                            //=> true
 *
 * const fracString = '22/7'
 * const match = utcString.match(_REGEX_RATIONAL)
 * if (!match) throw Error('Rational number string not in proper format')
 *
 * const numerator = parseInt(match[1], 10)              //=> 22
 * const slashDenominator = match[2]                     //=> '/7'
 * const denominator = parseInt(match[2].slice(1), 10)   //=> 7
 *
 */const REGEX_RATIONAL = /^(-?[0-9]+)(\/[0-9]*[1-9][0-9]*)?$/

module.exports = REGEX_RATIONAL
