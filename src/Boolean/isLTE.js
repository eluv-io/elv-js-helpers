const curry = require('../Functional/curry')

/**
 * Returns `true` if SECOND input is less than or equal to the FIRST input, `false` otherwise.
 *
 * Note that this is the REVERSE of normal infix notation, as well as Ramda's `lte` function - this is to allow
 * more intuitive currying, e.g. isAtMost42 = isLTE(42)
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
 * const isLTE = require('@eluvio/elv-js-helpers/Boolean/isLTE')
 *
 * isLTE(42, 1)             //=> true
 *
 * isLTE(1, 42)             //=> false
 *
 * isLTE(42, 42)            //=> true
 *
 * isLTE(null, undefined)   //=> false
 *
 * isLTE(undefined, null)   //=> false
 *
 * // function is curried: can call with fewer params to obtain a narrower function
 * const notPositive = isLTE(0)
 *
 * notPositive(-1)          //=> true
 *
 * notPositive(0)           //=> true
 *
 * notPositive(1)           //=> false
 */
const isLTE = curry((a, b) => b <= a)

module.exports = isLTE
