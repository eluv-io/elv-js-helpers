
const join = require('@eluvio/ramda-fork/src/join')
const last = require('@eluvio/ramda-fork/src/last')
const splitWhen = require('@eluvio/ramda-fork/src/splitWhen')
const startsWith = require('@eluvio/ramda-fork/src/startsWith')
const tail = require('@eluvio/ramda-fork/src/tail')
const zipWith = require('@eluvio/ramda-fork/src/zipWith')

const Pair = require('../ADT/Pair')

const equals = require('../Boolean/isEquivalent')
const isEmpty = require('../Boolean/isEmpty')

const constant = require('../Functional/constant')
const negate = require('../Functional/negate')
const pipe = require('../Functional/pipe')
const reverse = require('../Functional/reverse')
const when = require('../Functional/when')


// TODO: refactor?

const _divMod = (pair, divisor) => Pair(
  pair.fst().concat([Math.floor(pair.snd() / divisor)]),
  pair.snd() % divisor
)

const _dhms = seconds => [86400, 3600, 60, 1].reduce(
  _divMod,
  Pair([], seconds)
).fst().map(s=>s.toString().padStart(2, '0'))


/**
 * Returns an ETA expressed as number of days/hours/minutes/seconds remaining, based on a supplied value for how many seconds are left.
 *
 * Unneeded larger units are omitted, and zero padding is suppressed for first number.
 *
 * If `secondsLeft` is negative, returns `'--'`
 *
 * @function
 * @category Datetime
 * @sig Number -> String
 * @param {number} secondsLeft The number of seconds remaining until completion
 * @returns {string}
 * @example
 *
 * const etaDurStr = require('@eluvio/elv-js-helpers/Datetime/etaDurStr')
 *
 * etaDurStr(0)      //=> "0s"
 *
 * etaDurStr(1)      //=> "1s"
 *
 * etaDurStr(61)     //=> "1m 01s"
 *
 * etaDurStr(3661)   //=> "1h 01m 01s"
 *
 * etaDurStr(90061)  //=> "1d 01h 01m 01s"
 *
 * etaDurStr(954061) //=> "11d 01h 01m 01s"
 *
 * etaDurStr(-1)     //=> "--"
 *
 *
 */
const etaDurStr = secondsLeft =>
  secondsLeft < 0 ?
    '--' :
    pipe(
      splitWhen(negate(equals('00'))),  // split list in 2 - [leading '00' entries] and [first non-'00' entry plus rest]
      last, // discard leading '00' entries
      when(isEmpty, constant(['00'])), // if nothing is left, use a single entry ['00'] so we end up with '0s'
      reverse, // reverse to put seconds first, minutes next, etc. because zipWith() operates from beginning of array to end
      zipWith((suffix, value) => `${value}${suffix}`, ['s', 'm', 'h', 'd']), // pair each remaining entry with appropriate suffix
      reverse, // put back in normal order
      join(' '),
      when(startsWith('0'), tail) // remove leading zero if found
    )(_dhms(secondsLeft))


module.exports = etaDurStr
