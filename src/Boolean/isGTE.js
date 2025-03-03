'use strict'
const curry = require('../Functional/curry')

/**
 * Returns `true` if SECOND input is greater than or equal to the FIRST input, `false` otherwise.
 *
 * Note that this is the REVERSE of normal infix notation, as well as Ramda's `gte` function - this is to allow
 * more intuitive currying, e.g. isAtLeast42 = isGTE(42)
 *
 * If called with fewer than 2 arguments, will return a [partially applied function](https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch04)
 *
 * Uses the Javascript [Greater than or equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
 * operator (`>=`) to perform the comparison.
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
const isGTE = curry((a, b) => b >= a)

module.exports = isGTE
