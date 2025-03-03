'use strict'
/**
 * [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) used for
 * validation of UUID strings in format '00000000-0000-0000-0000-000000000000'
 *
 * Both upper case and lower case are accepted for hex digits.
 *
 * @constant
 * @default
 * @type {RegExp}
 * @category Constant
 * @example
 *
 * 'use strict'
 * const RE_UUID = require('@eluvio/elv-js-helpers/Validation/RE_UUID')
 *
 * RE_UUID.test('0')                                      //=> false
 *
 * RE_UUID.test('ABCDEF00-0000-0000-0000-000000000000')   //=> true
 *
 * RE_UUID.test('abcdef00-0000-0000-0000-000000000000')   //=> true
 *
 * RE_UUID.test('abcdef00-0000-0000-0000-ABCDEF000000')   //=> true
 *
 */
const RE_UUID = /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$/

module.exports = RE_UUID
