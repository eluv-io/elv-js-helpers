'use strict'
/**
 * Passthrough for the `toPairs()` [Crocks](https://crocks.dev/) function
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * See [https://crocks.dev/docs/crocks/Pair.html#topairs](https://crocks.dev/docs/crocks/Pair.html#topairs) for more details.
 *
 * Converts an object into a Crocks `List` of `Pair` objects, each with key as first element and value as second element.
 *
 * Not to be confused with [Ramda's toPairs() function](https://ramdajs.com/docs/#toPairs), which returns a 2-level
 * regular Javascript array.
 *
 * @function
 * @category Conversion
 * @sig Object -> List (Pair String a)
 * @param {Object} - The object to convert
 * @returns {List} List of Pairs
 * @example
 *
 * 'use strict'
 * const toPairs = require('@eluvio/elv-js-helpers/Conversion/toPairs')
 *
 * const kvPairs = toPairs({a:1, b:2})
 * kvPairs.inspect()                     //=> 'List [ Pair( "a", 1 ), Pair( "b", 2 ) ]'
 *
 */
const toPairs = require('crocks/Pair/toPairs')

module.exports = toPairs
