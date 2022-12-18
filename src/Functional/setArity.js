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
 * const log3items = setArity(3, console.log)
 *
 * const log2more = log3items("Prefix:")      //=> returns partially applied function
 *
 * const log1more = log2more("WARN")          //=> returns partially applied function
 *
 * const log1more("message")                  //=> Outputs "Prefix: WARN message"
 *
 */
const setArity = require('crocks/helpers/nAry')

module.exports = setArity
