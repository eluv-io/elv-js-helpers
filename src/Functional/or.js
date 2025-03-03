'use strict'
/**
 * Passthrough for the `or()` [Crocks function](https://crocks.dev/docs/functions/logic-functions.html#or)
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * Given two predicate functions (a -> Boolean), returns a function that combines the two using logical OR.
 *
 * @function
 * @curried
 * @category Functional
 * @sig (a -> Boolean | Pred a) -> (a -> Boolean | Pred a) -> a -> Boolean
 * @param {Function} - First function that returns a Boolean
 * @param {Function} - Second function that returns a Boolean
 * @returns {Function} Function which takes input, passes to both input functions, and then combines return values with logical OR
 * @example
 *
 * 'use strict'
 * const or = require('@eluvio/elv-js-helpers/Functional/or')
 *
 * const isEven = x => (x % 2) === 0
 * const isNegative = x => x < 0
 *
 * const isNegOrEven = or(isEven, isNegative)
 *
 * isNegOrEven(3)         //=> false
 * isNegOrEven(2)         //=> true
 * isNegOrEven(-3)        //=> true
 *
 */
const or = require('crocks/logic/or')

module.exports = or
