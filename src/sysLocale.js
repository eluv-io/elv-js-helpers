/**
 * Returns locale string from current environment (see http://www.lingoes.net/en/translator/langcode.htm)
 *
 * @function
 * @since v0.0.1
 * @category Time
 * @sig () -> String
 * @returns {String}
 * @example
 *
 * sysLocale() //=> "en-US"
 *
 */
const sysLocale = () => {
  const opts = new Intl.DateTimeFormat().resolvedOptions()
  return opts.locale
}

module.exports = sysLocale
