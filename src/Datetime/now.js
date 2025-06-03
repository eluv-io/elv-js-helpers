'use strict'
/**
 * Returns current datetime as a [Javascript Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
 *
 * @function
 * @category Datetime
 * @sig () -> Date
 * @returns {Date}
 * @example
 *
 * 'use strict'
 * const now = require('@eluvio/elv-js-helpers/Datetime/now')
 *
 * const isGT = require('@eluvio/elv-js-helpers/Boolean/isGT')
 * const kind = require('@eluvio/elv-js-helpers/Validation/kind')
 *
 * const currentDatetime = now()
 *
 * kind(currentDatetime)                            //=> 'Date'
 *
 * // later than 2022-12-02T16:53:20Z:
 * isGT(1670000000000, currentDatetime.valueOf())   //=> true
 */
const now = () => new Date

module.exports = now
