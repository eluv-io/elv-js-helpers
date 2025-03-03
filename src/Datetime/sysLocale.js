'use strict'
/**
 * Returns locale string from current environment (see http://www.lingoes.net/en/translator/langcode.htm)
 *
 * The locale string is used to format dates and times
 *
 * @function
 * @category Datetime
 * @sig () -> String
 * @returns {String}
 * @example
 *
 * 'use strict'
 * const sysLocale = require('@eluvio/elv-js-helpers/Datetime/sysLocale')
 *
 * sysLocale() //=> 'en-US'
 *
 */
const sysLocale = () => {
  const opts = new Intl.DateTimeFormat().resolvedOptions()
  return opts.locale
}

module.exports = sysLocale
