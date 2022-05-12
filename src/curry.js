/**
 * Passthrough for the `curry()` [Crocks](https://crocks.dev/) function (Copyright © 2016, Ian Hofmann-Hicks, ISC license)
 *
 * See [https://crocks.dev/docs/functions/helpers.html#curry](https://crocks.dev/docs/functions/helpers.html#curry)
 * for more details.
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * [Currying](https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch04) converts a function that takes multiple
 * arguments into one that can take fewer arguments and returns a function that can be supplied with the remaining
 * arguments. This can be useful for creating a more specific function from a general function.
 *
 * It is similar to defining a function using syntax like `const mult = x => y => x * y`, but allows calling the function
 * with the full list of arguments if desired (calling `mult(2, 2)` does not work when using the  `x => y =>` syntax).
 *
 * Some functions like `liftA2` and `liftA2Join` require a curried function as input.
 *
 * @function
 * @category Functional
 * @sig ((a, b, ...) -> z) -> a -> b -> ... -> z
 * @param {Function} - The function to curry
 * @returns {Function} The curried function
 * @example
 *
 * const curry = require('@eluvio/elv-js-helpers/curry')
 *
 * const withinBounds(lower, upper, val) => (val >= lower) && (val <= upper)
 *
 * // curry an already-defined function
 * const fromZeroToOne = curry(withinBounds)(0, 1) // returns a new function that takes 1 argument (val)
 *
 * fromZeroToOne(0)                                //=> true
 *
 * fromZeroToOne(42)                               //=> false
 *
 * // curry the function during definition
 * const greaterThan = curry(
 *   (lowerBound, val) => (val > lowerBound)
 * )
 *
 * greaterThan(0, 1)                 //=> true (function can be called normally with full set of arguments)
 *
 * const isPositive = greaterThan(0) // when called with only lowerBound, returns a new function that takes 1 argument (val)
 *
 * isPositive(0)                     //=> false
 *
 * isPositive(42)                    //=> true
 *
 */
const curry = require('crocks/helpers/curry')

module.exports = curry
