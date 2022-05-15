const invoker = require('ramda/src/invoker')

/**
 * Takes two inputs (for `locales` and `options` and returns a function that will accept a
 * [Javascrpt Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
 * object and return a string obtained by invoking its `toLocaleString()` method with the
 * specified `locales` and `options` arguments.
 *
 * See [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
 * for more details.
 *
 * @function
 * @category Datetime
 * @sig () -> (())
 * @param {(String | String[] )} - The `locales` argument to pass to `Date.toLocaleString()`
 * @param {Object} - The options argument to pass to `Date.toLocaleString()`
 * @returns {Function}
 * @example
 *
 * const toLocaleString = require('@eluvio/elv-js-helpers/Datetime/toLocaleString')
 *
 * const fullDateString = toLocaleString(DateTime.DATE_FULL)
 * const myDate = DateTime.fromISO('2022-01-01T01:00:00', {zone: 'utc'}).setLocale('en-US')
 *
 * fullDateString(myDate) //=> "January 1, 2022"
 *
 */
const toLocaleString = invoker(2, 'toLocaleString')

module.exports = toLocaleString
