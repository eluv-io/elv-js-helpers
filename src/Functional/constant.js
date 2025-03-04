'use strict'
/**
 * Passthrough for the `constant()` [Crocks combinator](https://crocks.dev/docs/functions/combinators.html)
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * See [https://crocks.dev/docs/functions/combinators.html#constant](https://crocks.dev/docs/functions/combinators.html#constant)
 * for more details.
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * Given an input, returns a function that always returns that input.
 *
 * @function
 * @category Functional
 * @sig a -> (() -> a)
 * @param {*} - The value to always return
 * @returns {Function} Function that ignores any input and always returns the original value
 * @example
 *
 * 'use strict'
 * const constant = require('@eluvio/elv-js-helpers/Functional/constant')
 *
 * const always42 = constant(42)
 *
 * always42()   //=> 42
 *
 */
const constant = require('crocks/combinators/constant')

module.exports = constant
