const gte = require('ramda/src/gte')

const flip = require('../Functional/flip')

/**
 * Reversed version of Ramda's `gte` function _(Copyright © 2013-2020 Scott Sauyet and Michael Hurley)_
 *
 * Returns `true` if SECOND input is greater or equal to than the FIRST input, `false` otherwise.
 *
 * Note that this is the reverse of Ramda's `gte` function, this is to allow more intuitive currying.
 *
 * If called with fewer than 2 arguments, will return a [partially applied function](https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch04)
 *
 * @function
 * @curried
 * @category Boolean
 * @sig * -> * -> Boolean
 * @param {*} - the first value to compare
 * @param {*} - the second value to compare
 * @returns {Boolean}
 * @example
 *
 * const isGTE = require('@eluvio/elv-js-helpers/Boolean/isGTE')
 *
 * isGTE(1, 42)             //=> true
 *
 * isGTE(42, 1)             //=> false
 *
 * isGTE(42, 42)            //=> true
 *
 * isGTE(null, undefined)   //=> false
 *
 * // function is curried: can call with fewer params to obtain a narrower function
 * const notNegative = isGTE(0)
 *
 * notNegative(-1)          //=> false
 *
 * notNegative(0)           //=> true
 *
 * notNegative(1)           //=> true
 */
const isGTE = flip(gte)

module.exports = isGTE
