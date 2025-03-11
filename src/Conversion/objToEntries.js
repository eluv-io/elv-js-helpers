'use strict'
/**
 * Javascript's built-in [Object.toEntries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toEntries) function.
 *
 * Creates an array of key/value pairs from an object.
 *
 * Not to be confused with [toPairs()](#toPairs), which returns a [Crocks](https://crocks.dev/) `List` of `Pairs`.
 *
 * Provided for use in function composition.
 *
 * @function
 * @category Conversion
 * @sig Object -> [[String *]]
 * @param obj {Object} - Object to convert
 * @returns {Array} Array of 2-element arrays each containing an attribute name and value
 * @see toPairs
 * @example
 *
 * 'use strict'
 * const objToEntries = require('@eluvio/elv-js-helpers/Conversion/objToEntries')
 *
 * const obj = {a: 1, b: {c: 3, d:4}}
 *
 * objToEntries(obj)     //=> [['a', 1], ['b', {c: 3, d:4}]]
 *
 */
const objToEntries = obj => Object.entries(obj)

module.exports = objToEntries
