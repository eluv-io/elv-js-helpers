const {invoker} = require('ramda')

/**
 * Returns a function that will accept a [Luxon DateTime](https://moment.github.io/luxon/#/) object and return a string
 * obtained by invoking its `toLocaleString()` method with the specified Luxon DateTime
 * [format](https://moment.github.io/luxon/api-docs/index.html#datetimedate_short)
 *
 * @function
 * @private
 * @since v0.0.1
 * @category Time
 * @sig String -> (DateTime -> String)
 * @param {String} - The Luxon DateTime format to use when invoking `DateTime#toLocaleString()`
 * @returns {Function}
 *
 * @example
 *
 * const {DateTime} = require('luxon')
 * const fullDateString = _toLocaleString(DateTime.DATE_FULL)
 * const myDate = DateTime.fromISO('2022-01-01T01:00:00', {zone: 'utc'}).setLocale('en-US')
 *
 * fullDateString(myDate) //=> "January 1, 2022"
 *
 */
const _toLocaleString = invoker(1, 'toLocaleString')

module.exports = _toLocaleString
