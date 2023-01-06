const curry = require('../Functional/curry')

/**
 * Returns `true` if SECOND input is less than the FIRST input, `false` otherwise.
 *
 * Note that this is the REVERSE of normal infix notation, as well as Ramda's `lt` function - this is to allow
 * more intuitive currying, e.g. isLessThan42 = isLT(42)
 *
 * If called with fewer than 2 arguments, will return a [partially applied function](https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch04)
 *
 * Uses the Javascript [Less than](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than)
 * operator (`<`) to perform the comparison.
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
 * const isLT = require('@eluvio/elv-js-helpers/Boolean/isLT')
 *
 * isLT(42, 1)             //=> true
 *
 * isLT(1, 42)             //=> false
 *
 * isLT(42, 42)            //=> false
 *
 * isLT(null, undefined)   //=> false
 *
 * isLT(undefined, null)   //=> false
 *
 * // function is curried: can call with fewer params to obtain a narrower function
 * const isNegative = isLT(0)
 *
 * isNegative(-1)          //=> true
 *
 * isNegative(0)           //=> false
 *
 * isNegative(1)           //=> false
 */
const isLT = curry((a, b) => b < a )

module.exports = isLT
