'use strict'
/**
 * Renamed passthrough for the [Ramda `equals` function](https://ramdajs.com/docs/#equals) _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Compares two values for equivalence, meaning it can compare arrays, objects, and functions. Also handles cyclical
 * data structures.
 *
 * @function
 * @curried
 * @category Boolean
 * @sig a -> b -> Boolean
 * @param {*} - The first value to compare
 * @param {*} - The second value to compare
 * @returns {Boolean}
 * @example
 *
 * const isEquivalent = require('@eluvio/elv-js-helpers/Boolean/isEquivalent')
 *
 * isEquivalent(42, 42)             //=> true
 *
 * isEquivalent(42, '42')           //=> false
 *
 * isEquivalent([42], [42])         //=> true
 *
 * // element order matters for arrays
 * isEquivalent([1, 42], [1, 42])   //=> true
 * isEquivalent([1, 42], [42, 1])   //=> false
 *
 * // property order in objects does not matter
 * const obj1 = {foo: 42, bar: 1}
 * const obj2 = {bar: 1, foo: 42}
 * isEquivalent(obj1, obj2)         //=> true
 *
 * // function is curried: can call with fewer params to obtain a more specific function:
 * const isEmptyObject = isEquivalent({})
 *
 * isEmptyObject({})           //=> true
 *
 * isEmptyObject(42)           //=> false
 */
const isEquivalent = require('@eluvio/ramda-fork/src/equals')

module.exports = isEquivalent
