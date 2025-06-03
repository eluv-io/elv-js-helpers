'use strict'
const now = require('./now')
/**
 * Returns current datetime as a UTC string in form `YYYY-MM-DDTHH:MM:SSZ` e.g. '2025-01-01T01:00:00Z'
 *
 * @function
 * @category Datetime
 * @sig () -> String
 * @returns {String}
 * @example
 *
 * 'use strict'
 * const nowUTCStr = require('@eluvio/elv-js-helpers/Datetime/nowUTCStr')
 *
 * const isGT = require('@eluvio/elv-js-helpers/Boolean/isGT')
 * const kind = require('@eluvio/elv-js-helpers/Validation/kind')
 *
 * const currentUTCTimestamp = nowUTCStr()
 *
 * kind(currentUTCTimestamp)                            //=> 'String'
 *
 * // string value is larger (later) than 2025-01-01T01:00:00Z:
 * isGT('2025-01-01T01:00:00Z', currentUTCTimestamp)   //=> true
 */
const nowUTCStr = () => now().toUTCString()

module.exports = nowUTCStr
