'use strict'
/**
 * Passthrough for the `and()` [Crocks function](https://crocks.dev/docs/functions/logic-functions.html#and)
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * Given two predicate functions (a -> Boolean), returns a function that combines the two using logical AND.
 *
 * @function
 * @curried
 * @category Functional
 * @sig (a -> Boolean | Pred a) -> (a -> Boolean | Pred a) -> a -> Boolean
 * @param {Function} - First function that returns a Boolean
 * @param {Function} - Second function that returns a Boolean
 * @returns {Function} Function which takes input, passes to both input functions, and then combines return values with logical AND
 * @example
 *
 * 'use strict'
 * const and = require('@eluvio/elv-js-helpers/Functional/and')
 *
 * const isEven = x => (x % 2) === 0
 * const isNegative = x => x < 0
 *
 * const isNegEven = and(isEven, isNegative)
 *
 * isNegEven(3)         //=> false
 * isNegEven(2)         //=> false
 * isNegEven(-2)        //=> true
 *
 */
const and = require('crocks/logic/and')

module.exports = and
