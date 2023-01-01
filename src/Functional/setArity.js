/**
 * Renamed passthrough for the `nAry()` [Crocks](https://crocks.dev/docs/functions/helpers.html#nary) function
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * Converts a function that takes a variable number of arguments and converts to a curried function that one that
 * specified number of arguments.
 *
 * @function
 * @curried
 * @category Functional
 * @sig Number -> ((*) -> a) -> (*) -> a
 * @param {number} - arity - Number of arguments for the returned function to accept
 * @param {Function} - The function to convert
 * @returns {Function} Curried version of function with fixed argument count
 * @example
 *
 * const setArity = require('@eluvio/elv-js-helpers/Functional/setArity')
 *
 * const maxOfThree = setArity(3, Math.max)
 *
 * // creates partially applied function with 1 argument applied (waiting for 2 more):
 * const maxNeedTwoMore = maxOfThree(42)
 *
 * // creates partially applied function with 2 arguments applied (waiting for 1 more):
 * const maxNeedOneMore = maxNeedTwoMore(0)
 *
 * maxNeedOneMore(-42)                  //=> 42
 *
 */
const setArity = require('crocks/helpers/nAry')

module.exports = setArity
