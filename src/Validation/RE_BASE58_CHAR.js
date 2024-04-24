/**
 * [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) used for
 * validation of a [Base58](https://datatracker.ietf.org/doc/html/draft-msporny-base58-03) character.
 *
 * NOTE: This RegExp will match a string that contains a Base58 character anywhere within. It is intended for use
 * in more complex RegExps created with reFromTemplate()
 *
 * @constant
 * @default
 * @type {RegExp}
 * @category Constant
 * @example
 *
 * const RE_BASE58_CHAR = require('@eluvio/elv-js-helpers/Validation/RE_BASE58_CHAR')
 *
 * RE_BASE58_CHAR.test('1')          //=> true
 *
 * RE_BASE58_CHAR.test('l')          //=> false
 *
 * RE_BASE58_CHAR.test('l1l')        //=> true
 *
 * const reFromTemplate = require('@eluvio/elv-js-helpers/Conversion/reFromTemplate')
 *
 * const RE_SINGLE_BASE58_CHAR = reFromTemplate`^${RE_BASE58_CHAR}$`
 *
 * RE_SINGLE_BASE58_CHAR.test('1')   //=> true
 *
 * RE_SINGLE_BASE58_CHAR.test('l')   //=> false
 *
 * RE_SINGLE_BASE58_CHAR.test('l1l') //=> false
 *
 */
const RE_BASE58_CHAR = /[1-9A-HJ-NP-Za-km-z]/

module.exports = RE_BASE58_CHAR
