/**
 * Javascript's built-in [Object.fromEntries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) function.
 *
 * Creates an object from a list of key/value pairs.
 *
 * Not to be confused with [fromPairs()](#fromPairs), which takes a [Crocks](https://crocks.dev/) `List` of `Pairs`.
 *
 * @function
 * @category Conversion
 * @sig [[String *]] -> Object
 * @param arr {Array} - Array of 2-element arrays each containing an attribute name and value
 * @returns {Object}
 * @see fromPairs
 * @example
 *
 * const objFromEntries = require('@eluvio/elv-js-helpers/Conversion/objFromEntries')
 *
 * const kvPairs = [['a', 1], ['b',2]]
 *
 * objFromEntries(kvPairs)     //=> { a: 1, b: 2 }
 *
 */
const objFromEntries = arr => Object.fromEntries(arr)

module.exports = objFromEntries
