'use strict'
const _pickBy = require('@eluvio/ramda-fork/src/pickBy')

const curry = require('./curry')

/**
 * Passthrough for Ramda's `pickBy` function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Ramda](https://www.npmjs.com/package/ramda)
 * package as a dependency.
 *
 * Returns a new object with the keys selected by a test function called with value/key pairs.
 *
 * @function
 * @curried
 * @category Functional
 * @sig ((v, k) → Boolean) → {k: v} → {k: v}
 * @param {Function} testFn - function that accepts two args (value, key) and returns `true` or `false`
 * @param {Object} obj - array of arrays or objects to pluck property or element from
 * @returns {Object} Object containing only the keys where `testFn(value, key)` returned `true`
 * @example
 *
 * 'use strict'
 * const pickBy = require('@eluvio/elv-js-helpers/Functional/pickBy')
 *
 * const valueIsEven = (v, k) => v % 2 === 0
 *
 * const obj = {a: 1, b: 2, c: 3, d:4}
 *
 * pickBy(valueIsEven, obj)    //=> {b:2, d:4}
 *
 * // function is curried: call with just first param to obtain a more specialized function
 * const evenValuesOnly = pickBy(valueIsEven)
 *
 * evenValuesOnly(obj)        //=> {b:2, d:4}
 *
 */
const pickBy = curry(
  (testFn, obj) => _pickBy(testFn, obj)
)

module.exports = pickBy
