/**
 * Passthrough for the `ifElse()` [Crocks point-free function](https://crocks.dev/docs/functions/pointfree-functions.html)
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * See [https://crocks.dev/docs/functions/logic-functions.html#ifelse](https://crocks.dev/docs/functions/logic-functions.html#ifelse)
 * for more details.
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * Given 3 functions (a boolean function and two additional functions), returns a function that takes a value and, if
 * function1(value) is true, returns function2(value), else returns function3(value)
 *
 * @function
 * @category Functional
 * @sig (a -> boolean) -> (a -> b) -> (a -> b) -> a -> b
 * @param {Function} - The boolean test function
 * @param {Function} - The function to apply to value if test function returns true
 * @param {Function} - The function to apply to value if test function returns false
 * @returns {Function} Function which takes a value and returns output of one of the latter two functions
 * @example
 *
 * const ifElse = require('@eluvio/elv-js-helpers/Functional/ifElse')
 *
 * const isEven = x => x % 2 === 0
 * const half = x => x/2
 * const triplePlusOne = x => 3 *x + 1
 *
 * const collatz = ifElse(
 *   isEven,
 *   half,
 *   triplePlusOne
 * )
 *
 * collatz(3)       //=> 10
 * collatz(10)      //=> 5
 *
 */
const ifElse = require('crocks/logic/ifElse')

module.exports = ifElse
