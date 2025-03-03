'use strict'
const curry = require('../Functional/curry')

/**
 * Takes two inputs (for `locales` and `options` and returns a function that will accept a
 * [Javascript Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
 * object and return a string obtained by invoking its `toLocaleString()` method with the
 * specified `locales` and `options` arguments.
 *
 * See [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
 * for more details.
 *
 * See [https://devhints.io/wip/intl-datetime](https://devhints.io/wip/intl-datetime) for a list of options.
 *
 * See [https://gist.github.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a](https://gist.github.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a)
 * for a list of time zones.
 *
 * @function
 * @curried
 * @category Datetime
 * @sig (String | [String], Object) -> (Date -> String)
 * @param {(String | String[] )} locales - The `locales` argument to pass to `Date.toLocaleString()`
 * @param {Object} options - The `options` argument to pass to `Date.toLocaleString()`
 * @returns {Function}
 * @example
 *
 * 'use strict'
 * const toLocaleString = require('@eluvio/elv-js-helpers/Datetime/toLocaleString')
 * const utcStrToDate = require('@eluvio/elv-js-helpers/Datetime/utcStrToDate')
 *
 * const myDate = utcStrToDate('2022-03-01T14:00:00Z')
 *
 * const USA_Pacific_short = toLocaleString(
 *   'en-US',
 *   {
 *     hour: 'numeric',
 *     day: 'numeric',
 *     minute: 'numeric',
 *     month: 'short',
 *     second: 'numeric',
 *     timeZone: 'America/Los_Angeles',
 *     timeZoneName: 'short'
 *   }
 * )
 *
 * USA_Pacific_short(myDate)                //=> 'Mar 1, 6:00:00 AM PST'
 *
 * const UK_long = toLocaleString(
 *   'en-GB',
 *   {
 *     dateStyle: 'full',
 *     timeStyle: 'long',
 *     timeZone: 'Europe/London'
 *   }
 * )
 *
 * UK_long(myDate)                          //=> 'Tuesday, 1 March 2022 at 14:00:00 GMT'
 *
 * // function is curried, it is possible to pass all arguments at once to define and invoke in one step:
 *
 * const options = {
 *     dateStyle: 'short',
 *     timeStyle: 'short',
 *     timeZone: 'America/New_York'
 * }
 *
 * toLocaleString('en-US', options, myDate) //=> '3/1/22, 9:00 AM'
 *
 *
 */
const toLocaleString = curry(
  (locales, options) => date => date.toLocaleString(locales, options)
)

module.exports = toLocaleString
