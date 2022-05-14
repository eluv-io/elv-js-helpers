/**
 * Passthrough for the `pipe()` [Crocks helper function](https://crocks.dev/docs/functions/helpers.html)
 * (Copyright © 2016, Ian Hofmann-Hicks, ISC license)
 *
 * See [https://crocks.dev/docs/functions/helpers.html#pipe](https://crocks.dev/docs/functions/helpers.html#pipe) for
 * more details.
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * Composes functions in left to right order (which is generally more readable than the right-to-left order used by
 * `compose`) and returns a new function.
 *
 * @function
 * @curried
 * @category Functional
 * @sig ((a -> b), ..., (y -> z)) -> a -> z
 * @param {...Function} - Two or more curried functions to compose in left-to-right order
 * @returns {Function} The composed function
 * @example
 *
 * const pipe = require('@eluvio/elv-js-helpers/pipe')
 *
 * // function has only one input, not need to curry
 * const trim = str => str.trim()
 *
 * // function has only one input, not need to curry
 * const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.slice(1)
 *
 * const trimAndCapitalize = pipe(trim, capitalizeFirst)
 *
 * trimAndCapitalize('   foo  ')    //=> 'Foo'
 *
 */
const pipe = require('crocks/helpers/pipe')

module.exports = pipe
