/**
 * Renamed passthrough for the `not()` [Crocks](https://crocks.dev/docs/functions/logic-functions.html#not) function
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * Takes a 1-input function and returns a negated version of the function, which will return `false` where the original
 * function returned `true`, and `true` where the original function returned `false`.
 *
 * NOTE: This is not equivalent to using the [Javascript NOT (!) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT),
 * it returns a new function rather than returning negated result. It also is not suitable for negating functions
 * with more than 1 input, as it will interfere with currying and the additional arguments.
 *
 * @function
 * @category Functional
 * @sig (a -> Boolean) -> (a -> Boolean)
 * @param {Function} - A function that takes one input and returns a Boolean
 * @returns {Function} A function that returns logically inverted output of the original function
 * @example
 *
 * const negate = require('@eluvio/elv-js-helpers/Functional/negate')
 *
 * const isEmpty = a => a.length === 0
 *
 * const isNotEmpty = negate(isEmpty)
 *
 * isNotEmpty('foo')         //=> true
 *
 * isNotEmpty('')            //=> false
 *
 * isNotEmpty([])            //=> false
 *
 * isNotEmpty([1, 2, 3])     //=> true
 *
 * isNotEmpty(undefined)     //=> EXCEPTION: "Cannot read properties of undefined (reading 'length')"
 */
const negate = require('crocks/logic/not')

module.exports = negate
