const _flatten = require('@eluvio/ramda-fork/src/flatten')

/**
 * Passthrough for Ramda's `flatten` function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Returns a new list by pulling every item out of it (and all its sub-arrays) and putting them in a new array, depth-first.
 *
 * @function
 * @category Functional
 * @sig List -> List
 * @param {Array} x - the list to flatten
 * @returns {Array} The flattened list
 * @example
 *
 * const flatten = require('@eluvio/elv-js-helpers/Functional/flatten')
 *
 * flatten([1, [2, [3]]])         //=> [1, 2, 3]
 *
 * flatten("abc")                 //=> ['a', 'b', 'c']
 *
 */
const flatten = x => _flatten(x)

module.exports = flatten
