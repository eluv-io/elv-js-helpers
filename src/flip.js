/**
 * Passthrough for the `flip()` [Crocks combinator](https://crocks.dev/docs/functions/combinators.html) (Copyright © 2016, Ian Hofmann-Hicks, ISC license)
 *
 * See [https://crocks.dev/docs/functions/combinators.html#flip](https://crocks.dev/docs/functions/combinators.html#flip)
 * for more details.
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * Given a 2-input function, returns a new function with the order of inputs reversed.
 *
 * @function
 * @curried
 * @category Functional
 * @sig (a -> b -> c) -> b -> a -> c
 * @param {Function} - A 2-input function
 * @returns {Function} - A curried 2-input function that reverses the order of inputs before passing to the original function
 * @example
 *
 * const flip = require('@eluvio/elv-js-helpers/flip')
 *
 * const div = (a, b) => a/b
 *
 * div(4, 2)            //=> 2
 *
 * const reciprocalDiv = flip(div)
 *
 * reciprocalDiv(4, 2)  //=> 0.5
 *
 * // flip is curried, it is possible to call with all arguments at once
 *
 * flip(div, 4, 2)      //=> 0.5
 *
 */
const flip = require('crocks/combinators/flip')

module.exports = flip
