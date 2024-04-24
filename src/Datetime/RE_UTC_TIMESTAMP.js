/**
 * [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) used for first-pass
 * validation of UTC timestamp of form YYYY-MM-DDThh:mm:ssZ, e.g. '2022-01-01T14:00:00Z'.
 *
 * Capture groups parse the string into separate matches for year/month/day/hour/minute/second.
 *
 * @constant
 * @default
 * @type {RegExp}
 * @category Constant
 * @example
 *
 * const RE_UTC_TIMESTAMP = require('@eluvio/elv-js-helpers/Datetime/RE_UTC_TIMESTAMP')
 *
 * RE_UTC_TIMESTAMP.test('2022-01-02T03:45:00Z')     //=> true
 *
 * RE_UTC_TIMESTAMP.test('foo')                      //=> false
 *
 * const utcString = '2022-01-02T03:45:00Z'
 *
 * const match = utcString.match(RE_UTC_TIMESTAMP)
 * if (!match) throw Error('UTC timestamp not in proper format')
 *
 * // year
 * parseInt(match[1], 10)                            //=> 2022
 * // month
 * parseInt(match[2], 10)                            //=> 1
 * // day
 * parseInt(match[3], 10)                            //=> 2
 * // hour
 * parseInt(match[4], 10)                            //=> 3
 * // minute
 * parseInt(match[5], 10)                            //=> 45
 * // second
 * parseInt(match[6], 10)                            //=> 0
 *
 * const utcStringFrac = '2022-01-02T03:45:00.123Z'
 * const fracMatch = utcStringFrac.match(RE_UTC_TIMESTAMP)
 *
 * // fractional seconds
 * parseFloat(fracMatch[7])                              //=> 0.123
 *
 */
const RE_UTC_TIMESTAMP = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(\.[0-9]+)?Z$/

module.exports = RE_UTC_TIMESTAMP
