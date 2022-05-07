/**
 * Returns time zone string from current environment
 *
 * @function
 * @category Time
 * @sig () -> String
 * @returns {String}
 * @example
 *
 * sysTimezone() //=> "America/Los_Angeles"
 *
 */
const sysTimezone = () => {
  const opts = new Intl.DateTimeFormat().resolvedOptions()
  return opts.timeZone
}

module.exports = sysTimezone
