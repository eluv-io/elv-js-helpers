const branch = require('crocks/Pair/branch')
const ifElse = require('crocks/logic/ifElse')
const map = require('crocks/pointfree/map')
const pipe = require('crocks/helpers/pipe')
const snd = require('crocks/Pair/snd')

const {DateTime} = require('luxon')

const _toLocaleString = require('./internal/_toLocaleString')

const sysLocale = require('./sysLocale')
const sysTimezone = require('./sysTimezone')

/**
 * Returns an ETA time or datetime string based on a supplied value for current time and how many seconds are left.
 * The return string will include the month and day only if the ETA has a different date than `currentTime` (within the
 * specified time zone)
 *
 * If `secondsLeft` is negative, returns `'--'`
 *
 * Otherwise,
 *
 * * Bad values for `currentTime` / `zone` will return `'Invalid DateTime'`
 * * Unrecognized locale strings in `locales` will be ignored, and if none are recognized, it will be obtained from the system environment.
 * * Passing in a value of incorrect type for `locales` will cause an exception.
 *
 * @function
 * @category Time
 * @sig Date -> Number -> String
 * @param {Date} currentTime Javascript Date object to use as current time.
 * @param {Number} secondsLeft The number of seconds remaining until completion
 * @param {String} [zone=Intl.DateTimeFormat().resolvedOptions().timeZone] The time zone in which to express ETA
 * @param {(String | String[])} [locales=Intl.DateTimeFormat().resolvedOptions().locale] The locale to use to format ETA
 * @returns {String}
 * @example
 *
 * const currentTime = new Date('2022-01-01T07:30:00Z')
 *
 * etaTimeStr(currentTime, 10, 'America/Los_Angeles', 'en-US')   //=> "11:30:10 PM PST"
 *
 * etaTimeStr(currentTime, 3600, 'America/Los_Angeles', 'en-US') //=> "Jan 1, 12:30:00 AM PST"
 *
 * etaTimeStr(currentTime, -10, 'America/Los_Angeles', 'en-US')  //=> "--"
 *
 * etaTimeStr(currentTime, 10, 'foo', 'en-US')                   //=> "Invalid DateTime"
 */
const etaTimeStr = (currentTime, secondsLeft, zone = sysTimezone(), locales = sysLocale()) =>
  secondsLeft < 0 ?
    '--' :
    pipe(
      branch, // convert currentTime to a Pair of identical values, original will be preserved in first value
      map(dt => dt.plus({seconds: secondsLeft})), // increment the Pair's second value
      ifElse( // see if the date part (in specified time zone) is still the same between the two
        pipe(
          x => x.toArray(),
          map(_toLocaleString(DateTime.DATE_FULL)),
          x => x[0]===x[1]
        ),
        map(_toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET)), // if so, convert second value to just time string
        map(_toLocaleString({ // otherwise convert second value to a date + time string
          hour: 'numeric',
          day: 'numeric',
          minute: 'numeric',
          month: 'short',
          second: 'numeric',
          timeZoneName: 'short'
        }))
      ),
      snd // return the second value
    )(DateTime.fromJSDate(currentTime, {zone}).setLocale(locales))

module.exports = etaTimeStr
