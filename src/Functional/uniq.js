'use strict'
/**
 * Passthrough for Ramda's `uniq` function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Returns a new list containing only one copy of each equivalent element in the original list.
 *
 * Internally uses Ramda's `equals` function to compare elements for equivalency (available in elv-js-helpers as `isEquivalent`)
 *
 * @function
 * @category Functional
 * @sig [*] -> [*]
 * @param {Array} - the array of elements
 * @returns {Array} New list with only unique elements
 * @example
 *
 * 'use strict'
 * const uniq = require('@eluvio/elv-js-helpers/Functional/uniq')
 *
 * uniq([1, 2, 3, 2])                 //=> [1, 2, 3]
 *
 * const obj1 = {foo: 'bar'}
 * const obj2 = {foo: 'bar'}
 * const obj3 = {bar: 'baz'}
 *
 * uniq([obj1, obj2, obj3])           //=> [{foo: 'bar'}, {bar: 'baz'}]
 *
 * // Strings are treated as arrays of characters
 * uniq('alphabet')                  //=> ['a', 'l', 'p', 'h', 'b', 'e', 't']
 *
 * // Non-arrays are converted to empty array
 * uniq(99)                          //=> []
 *
 */
const uniq = require('@eluvio/ramda-fork/src/uniq')

module.exports = uniq