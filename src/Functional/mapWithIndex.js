const addIndex = require('ramda/src/addIndex')
const map = require('ramda/src/map')

/**
 * Iterates over an array and passes (element, index) pair to supplied function to generate new array
 *
 * @function
 * @curried
 * @category Functional
 * @sig ((*, Integer) -> *) -> Array -> Array
 * @param {Function} - The function to apply to each (element, index) pair
 * @param {Array} - The array to iterate over
 * @returns {Array}
 * @example
 *
 * const mapWithIndex = require('@eluvio/elv-js-helpers/Functional/mapWithIndex')
 *
 * mapWithIndex((e,i) => `${e}-${i}`, ['a', 'b', 'c']) //=> ['a-0', 'b-1', 'c-2']
 *
 * // function is curried: call with just 1 arg to obtain a narrower function
 * const addIndexSuffix = mapWithIndex((e,i) => `${e}-${i}`)
 *
 * addIndexSuffix(['a', 'b', 'c'])     //=> ['a-0', 'b-1', 'c-2']
 *
 */
const mapWithIndex = addIndex(map)

module.exports = mapWithIndex
