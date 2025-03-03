'use strict'
/**
 * Returns Datetime zone string from current environment
 *
 * @function
 * @category Datetime
 * @sig () -> String
 * @returns {String}
 * @example
 *
 * 'use strict'
 * const sysTimezone = require('@eluvio/elv-js-helpers/Datetime/sysTimezone')
 *
 * sysTimezone() //=> 'America/Los_Angeles'
 *
 */
const sysTimezone = () => {
  const opts = new Intl.DateTimeFormat().resolvedOptions()
  return opts.timeZone
}

module.exports = sysTimezone
