'use strict'
const isString = require('../Boolean/isString')

const REGEX_UTC_TIMESTAMP = require('./RE_UTC_TIMESTAMP')

const _MONTH_LENGTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

/**
 * Converts a string in UTC format (e.g. '2022-01-01T14:00:00Z' or '2022-01-01T14:00:00.0000Z') to a
 * [Javascript Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
 *
 * Returns a NaN date if string is an invalid date or is not in format: YYYY-MM-DDThh:mm:ss[.s...]Z
 *
 * Use `utcStrToDate` or `UTCStrModel` instead to generate an error on invalid date strings.
 *
 * @function
 * @category Conversion
 * @sig String -> Date
 * @param {String} utcString - The UTC timestamp to convert
 * @returns {Date}
 * @see utcStrToDate
 * @example
 *
 * 'use strict'
 * const dateObject = parseUTCStr('2022-01-01T14:00:00Z')
 * dateObject.valueOf()                                  //=> 1641045600000
 *
 * const dateObjectMilliseconds = parseUTCStr('2022-01-01T14:00:00.123Z')
 * dateObjectMilliseconds.valueOf()                     //=> 1641045600123
 *
 * // Strings containing bad datetime return Date object containing NaN
 * const badDate = parseUTCStr('2022-99-01T14:00:00Z')
 * badDate.valueOf()                                     //=> NaN
 *
 * // Non-strings return Date object containing NaN
 * const nonStringDate = parseUTCStr(42)
 * nonStringDate.valueOf()                               //=> NaN
 *
 */
const parseUTCStr = utcString => {
  if (!isString(utcString) || !REGEX_UTC_TIMESTAMP.test(utcString)) return new Date(NaN)

  const match = utcString.match(REGEX_UTC_TIMESTAMP)
  const year = parseInt(match[1], 10)
  const month = parseInt(match[2], 10)
  const day = parseInt(match[3], 10)
  const hour = parseInt(match[4], 10)
  const minute = parseInt(match[5], 10)
  const second = parseInt(match[6], 10)
  const milliseconds = match[7]
    ? Math.round(1000 * parseFloat(match[7]))
    : 0

  if (
    year < 1000 || year > 3000 ||
    month === 0 || month > 12 ||
    day === 0 || day > 31 ||
    hour > 23 ||
    minute > 59 ||
    second > 60 // UTC allows leap seconds
  ) return new Date(NaN)

  if (second === 60 && (hour !== 23 || minute !== 59)) return new Date(NaN) // leap seconds are only valid as 23h 59m 60s
  if (second === 60 && month !== 6 && month !== 12) return new Date(NaN) // leap seconds are only valid in June and Dec
  if (second === 60 && month === 6 && day !== 30) return new Date(NaN) // leap seconds are only valid on last day of month
  if (second === 60 && month === 12 && day !== 31) return new Date(NaN) // leap seconds are only valid on last day of month

  // Adjust for leap years
  const leapDay = (month === 2 && (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))) ? 1 : 0

  // Check that day of month is not too big
  if (day > _MONTH_LENGTHS[month - 1] + leapDay) return new Date(NaN)

  const result = new Date
  result.setUTCFullYear(year, month - 1, day) // monthValue is zero-indexed
  result.setUTCHours(hour)
  result.setUTCMinutes(minute)
  result.setUTCSeconds(second)
  result.setUTCMilliseconds(milliseconds)
  return result
}

module.exports = parseUTCStr
