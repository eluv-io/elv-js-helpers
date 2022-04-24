/**
 * Returns time zone string from current environment
 *
 * @function
 * @since v0.0.1
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
