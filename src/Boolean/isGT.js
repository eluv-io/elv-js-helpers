'use strict'
const curry = require('../Functional/curry')

/**
 * Returns `true` if SECOND input is greater than the FIRST input, `false` otherwise.
 *
 * Note that this is the REVERSE of normal infix notation, as well as Ramda's `gt` function - this is to allow
 * more intuitive currying, e.g. isGreaterThan42 = isGT(42)
 *
 * If called with fewer than 2 arguments, will return a [partially applied function](https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch04)
 *
 * Uses the Javascript [Greater than](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than)
 * operator (`>`) to perform the comparison.
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
 * 'use strict'
 * const isGT = require('@eluvio/elv-js-helpers/Boolean/isGT')
 *
 * isGT(1, 42)             //=> true
 *
 * isGT(42, 1)             //=> false
 *
 * isGT(42, 42)            //=> false
 *
 * isGT(null, undefined)   //=> false
 *
 * isGT(undefined, null)   //=> false
 *
 * // function is curried: can call with fewer params to obtain a narrower function
 * const isPositive = isGT(0)
 *
 * isPositive(-1)          //=> false
 *
 * isPositive(0)           //=> false
 *
 * isPositive(1)           //=> true
 */
const isGT = curry((a, b) => b > a )

module.exports = isGT
