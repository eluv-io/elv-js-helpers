const compose = require('crocks/helpers/compose')
const constant = require('crocks/combinators/constant')
const isEmpty = require('crocks/predicates/isEmpty')
const pipe = require('crocks/helpers/pipe')
const when = require('crocks/logic/when')

const {equals, join, last, not, reverse, splitWhen, startsWith, tail, zipWith} = require('ramda')

const {Duration} = require('luxon')

// Converts seconds to string in "##d ##h ##m ##s " format
// Unneeded larger units are omitted, and zero padding is suppressed for first number e.g.
//
// seconds must be >= 0, else 'n/a' is returned


/**
 * Returns an ETA expressed as number of days/hours/minutes/seconds remaining, based on a supplied value for how many seconds are left.
 *
 * Unneeded larger units are omitted, and zero padding is suppressed for first number.
 *
 * If `secondsLeft` is negative, returns `'--'`
 *
 * @function
 * @since v0.0.1
 * @category Time
 * @sig Number -> String
 * @param {number} secondsLeft The number of seconds remaining until completion
 * @returns {string}
 * @example
 *
 * etaDurationStr(0)      //=> "0s"
 *
 * etaDurationStr(1)      //=> "1s"
 *
 * etaDurationStr(61)     //=> "1m 01s"
 *
 * etaDurationStr(3661)   //=> "1h 01m 01s"
 *
 * etaDurationStr(90061)  //=> "1d 01h 01m 01s"
 *
 * etaDurationStr(954061) //=> "11d 01h 01m 01s"
 *
 * etaDurationStr(-1)     //=> "--"
 *
 *
 */
const etaDurationStr = secondsLeft =>
  secondsLeft < 0 ?
    '--' :
    pipe(
      splitWhen(compose(not, equals('00'))),  // split list in 2 - [leading '00' entries] and [first non-'00' entry plus rest]
      last, // discard leading '00' entries
      when(isEmpty, constant(['00'])), // if nothing is left, use a single entry ['00'] so we end up with '0s'
      reverse, // reverse to put seconds first, minutes next, etc. because zipWith() operates from beginning of array to end
      zipWith((suffix, value) => `${value}${suffix}`, ['s', 'm', 'h', 'd']), // pair each remaining entry with appropriate suffix
      reverse, // put back in normal order
      join(' '),
      when(startsWith('0'), tail) // remove leading zero if found
    )(Duration.fromMillis(secondsLeft * 1000, {numberingSystem: 'latn'}).toFormat('dd hh mm ss').split(' '))


module.exports = etaDurationStr
