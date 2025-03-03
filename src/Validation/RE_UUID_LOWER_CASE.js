'use strict'
/**
 * [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) used for
 * validation of UUID strings in format '00000000-0000-0000-0000-000000000000' using only lower case letters for hex
 * digits
 *
 * (Note that this is non-standard, [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) specifies that both upper and lower
 * case letters are acceptable)
 *
 * @constant
 * @default
 * @type {RegExp}
 * @category Constant
 * @example
 *
 * 'use strict'
 * const RE_UUID_LOWER_CASE = require('@eluvio/elv-js-helpers/Validation/RE_UUID_LOWER_CASE')
 *
 * RE_UUID_LOWER_CASE.test('0')                                      //=> false
 *
 * RE_UUID_LOWER_CASE.test('ABCDEF00-0000-0000-0000-000000000000')   //=> false
 *
 * RE_UUID_LOWER_CASE.test('abcdef00-0000-0000-0000-000000000000')   //=> true
 *
 * RE_UUID_LOWER_CASE.test('abcdef00-0000-0000-0000-ABCDEF000000')   //=> false
 *
 */
const RE_UUID_LOWER_CASE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/

module.exports = RE_UUID_LOWER_CASE
