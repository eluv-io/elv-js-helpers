const _ramdaSet = require('@eluvio/ramda-fork/src/internal/_Set')

const isArray = require('../Boolean/isArray')
const kind = require('../Validation/kind')
const throwIfFalse = require('../Validation/throwIfFalse')

/**
 * Returns `true` if passed an array with no duplicate elements.
 * Returns `false` if passed an array that has duplicate element(s).
 * Throws error if passed anything but an array.
 *
 * Uses [_Set](https://github.com/ramda/ramda/blob/master/source/internal/_Set.js) from
 * [Ramda](https://github.com/ramda/ramda) _(Copyright © Scott Sauyet and Michael Hurley)_ to determine
 * whether two elements are equivalent, so should handle cyclical data structures, comparison of equivalent objects,
 * functions, and so forth.
 *
 * @function
 * @category Boolean
 * @sig Array -> Boolean
 * @param {Array} arr - The value to test
 * @returns {Boolean}
 * @example
 *
 * const hasNoDuplicates = require('@eluvio/elv-js-helpers/Boolean/hasNoDuplicates')
 *
 * hasNoDuplicates([])                       //=> true
 *
 * hasNoDuplicates([1, 2, 3])                //=> true
 *
 * hasNoDuplicates([1, 2, 2])                //=> false
 *
 * hasNoDuplicates([[1, 2], [1, 2]])         //=> false
 *
 * hasNoDuplicates([[1, 2], [2, 1]])         //=> true
 *
 * hasNoDuplicates([[1, 1], [2, 2]])         //=> true
 *
 * hasNoDuplicates([{a:1, b:2}, {b:2, a:1}]) //=> false
 *
 * hasNoDuplicates('foo')                    //=> EXCEPTION: 'hasNoDuplicates() - expecting Array, got: String'
 *
 */
const hasNoDuplicates = arr => {
  throwIfFalse(`hasNoDuplicates() - expecting Array, got: ${kind(arr)}`, isArray(arr))
  const set = new _ramdaSet()
  for (const element of arr) if (!set.add(element)) return false
  return true
}

module.exports = hasNoDuplicates
