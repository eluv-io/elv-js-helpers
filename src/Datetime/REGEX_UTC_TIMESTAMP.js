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
 * const REGEX_UTC_TIMESTAMP = require('@eluvio/elv-js-helpers/Datetime/REGEX_UTC_TIMESTAMP')
 *
 * const utcString = '2022-01-02T03:45:00Z'
 *
 * const match = utcString.match(_REGEX_UTC_TIMESTAMP)
 * if (!match) throw Error('UTC timestamp not in proper format')
 *
 * const year = parseInt(match[1], 10)    //=> 2022
 * const month = parseInt(match[2], 10)   //=> 1
 * const day = parseInt(match[3], 10)     //=> 2
 * const hour = parseInt(match[4], 10)    //=> 3
 * const minute = parseInt(match[5], 10)  //=> 45
 * const second = parseInt(match[6], 10)  //=> 0
 *
 */
const REGEX_UTC_TIMESTAMP = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})Z$/

module.exports = REGEX_UTC_TIMESTAMP
