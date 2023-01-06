/**
 * Passthrough for the `identity()` [Crocks combinator](https://crocks.dev/docs/functions/combinators.html)
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * See [https://crocks.dev/docs/functions/combinators.html#identity](https://crocks.dev/docs/functions/combinators.html#identity)
 * for more details.
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * Given an input, returns that input. Used for composing functional workflows, often indicating 'no-op'.
 *
 * @function
 * @category Functional
 * @sig a -> a
 * @param {*} - The input value
 * @returns {*} The input value
 * @example
 *
 * const identity = require('@eluvio/elv-js-helpers/Functional/identity')
 *
 * identity(42)   //=> 42
 */
const identity = require('crocks/combinators/identity')

module.exports = identity
