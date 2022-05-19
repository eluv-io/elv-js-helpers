const _parseUTCStr = require('./internal/_parseUTCStr')

const UTCStrModel = require('./UTCStrModel')

/**
 * Converts a string in UTC format (e.g. '2022-01-01T14:00:00Z') to a
 * [Javascript Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
 *
 * Throws an exception if input is not a valid UTC string
 *
 * @function
 * @category Conversion
 * @sig String -> Date
 * @param {String} utcString - The UTC timestamp to convert
 * @returns {Date}
 * @example
 *
 * utcStrToDate('2022-01-01T14:00:00Z')  //=> 2022-01-01T14:00:00.000Z
 *
 * utcStrToDate('2022-99-01T14:00:00Z')  //=> EXCEPTION: Value is not a valid UTC datetime string (got: "2022-99-01T14:00:00Z")
 *
 * utcStrToDate(42)                      //=> EXCEPTION: expecting String, got Number 42
 */
const utcStrToDate = utcString =>
  _parseUTCStr(UTCStrModel(utcString))

module.exports = utcStrToDate
