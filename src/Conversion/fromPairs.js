/**
 * Passthrough for the `fromPairs()` [Crocks](https://crocks.dev/) function
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * See [https://crocks.dev/docs/functions/helpers.html#frompairs](https://crocks.dev/docs/functions/helpers.html#frompairs)
 * for more details.
 *
 * Creates an object from a Crocks `List` of `Pair` objects, with each `Pair` containing key as first element and value
 * as second element.
 *
 * Not to be confused with [Ramda's fromPairs() function](https://ramdajs.com/docs/#fromPairs), which takes a 2-level
 * regular Javascript array as input.
 *
 * @function
 * @category Conversion
 * @sig List (Pair String a) -> Object
 * @param {List} - The `List` of key, value `Pairs`
 * @returns {Object}
 * @example
 *
 * const List = require('@eluvio/elv-js-helpers/ADT/List')
 * const Pair = require('@eluvio/elv-js-helpers/ADT/Pair')
 *
 * const fromPairs = require('@eluvio/elv-js-helpers/Conversion/fromPairs')
 *
 * const kvPairs = List([Pair('a', 1), Pair('b',2)])
 *
 * fromPairs(kvPairs)     //=> { a: 1, b: 2 }
 *
 */
const fromPairs = require('crocks/helpers/fromPairs')

module.exports = fromPairs
