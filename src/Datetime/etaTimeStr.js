'use strict'
const branch = require('crocks/Pair/branch')
const snd = require('crocks/Pair/snd')

const addSeconds = require('./addSeconds')
const sysLocale = require('./sysLocale')
const sysTimezone = require('./sysTimezone')
const _toLocaleString = require('./toLocaleString')

const ifElse = require('../Functional/ifElse')
const map = require('../Functional/map')
const pipe = require('../Functional/pipe')

/**
 * Returns an ETA Datetime or Datetime string based on a supplied value for current Datetime and how many seconds are left.
 * The return string will include the month and day only if the ETA has a different date than `currentTime` (within the
 * specified Datetime zone)
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
 * @category Datetime
 * @sig Date -> Number -> String
 * @param {Date} currentTime Javascript Date object to use as current Datetime.
 * @param {Number} secondsLeft The number of seconds remaining until completion
 * @param {String} [zone=Intl.DateTimeFormat().resolvedOptions().timeZone] The Datetime zone in which to express ETA
 * @param {(String | String[])} [locales=Intl.DateTimeFormat().resolvedOptions().locale] The locale to use to format ETA
 * @returns {String}
 * @example
 *
 * 'use strict'
 * const etaTimeStr = require('@eluvio/elv-js-helpers/Datetime/etaTimeStr')
 *
 * const myTime = new Date('2022-01-01T07:30:00Z')
 *
 * etaTimeStr(myTime, 10, 'America/Los_Angeles', 'en-US')   //=> "11:30:10 PM PST"
 *
 * etaTimeStr(myTime, 3600, 'America/Los_Angeles', 'en-US') //=> "Jan 1, 12:30:00 AM PST"
 *
 * etaTimeStr(myTime, -10, 'America/Los_Angeles', 'en-US')  //=> "--"
 *
 * etaTimeStr(myTime, 10, 'foo', 'en-US')                   //=> EXCEPTION: "Invalid time zone specified: foo"
 */
const etaTimeStr = (currentTime, secondsLeft, zone = sysTimezone(), locales = sysLocale()) =>
  secondsLeft < 0 ?
    '--' :
    pipe(
      branch, // convert currentTime to a Pair of identical values, original will be preserved in first value
      map(addSeconds(secondsLeft)), // increment the Pair's second value
      ifElse( // see if the date part (in specified Datetime zone) is still the same between the two
        pipe(
          x => x.toArray(),
          map(_toLocaleString(locales, {timeZone: zone, day: 'numeric'})),
          x => x[0] === x[1]
        ),
        map( // if so, convert second value to just Datetime string
          _toLocaleString(
            locales,
            {
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              timeZone: zone,
              timeZoneName: 'short'
            }
          )
        ),
        map( // otherwise convert second value to a date + Datetime string
          _toLocaleString(
            locales,
            {
              hour: 'numeric',
              day: 'numeric',
              minute: 'numeric',
              month: 'short',
              second: 'numeric',
              timeZone: zone,
              timeZoneName: 'short'
            }
          )
        )
      ),
      snd // return the second value
    )(currentTime)

module.exports = etaTimeStr
