const curry = require('crocks/helpers/curry')

/**
 * Adds a specified number of seconds to a Javascript Date object and returns a new Date
 *
 * @function
 * @curried
 * @category Datetime
 * @sig Date -> Number -> String
 * @param {Number} seconds The number of seconds to add
 * @param {Date} datetime  Javascript Date object to add to
 * @returns {Date}
 * @example
 *
 * const addSeconds = require('@eluvio/elv-js-helpers/Datetime/addSeconds')
 *
 * const d = new Date('2022-01-01T07:30:00Z')
 *
 * addSeconds(3600, d).toUTCString()   //=> "Sat, 01 Jan 2022 08:30:00 GMT"
 *
 * addSeconds(-3600, d).toUTCString()  //=> "Sat, 01 Jan 2022 06:30:00 GMT"
 *
 */
const addSeconds = curry(
  (seconds, datetime) => new Date(datetime.valueOf() + seconds * 1000)
)

module.exports = addSeconds
