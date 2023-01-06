const curry = require('../Functional/curry')

/**
 * Compares 2 values using Javascript's [Strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
 * operator (`===`)
 *
 * Returns `true` if `value1 === value2`
 * Returns `false` otherwise
 *
 * To compare two arrays or objects for equivalence, use [isEquivalent](#isEquivalent) instead.
 *
 * @function
 * @curried
 * @category Boolean
 * @sig a -> Boolean
 * @param {*} x - The value to test
 * @returns {Boolean}
 * @example
 *
 * const isEqual = require('@eluvio/elv-js-helpers/Boolean/isEqual')
 *
 * isEqual(42, 42)       //=> true
 *
 * isEqual(42, '42')     //=> false
 *
 * isEqual([1], [1])     //=> false
 *
 * // function is curried: can call with fewer params to obtain a more specific function:
 * const equals42 = isEqual(42)
 *
 * equals42(0)           //=> false
 *
 * equals42(42)          //=> true
 *
 */
const isEqual = curry((x, y) => x === y)

module.exports = isEqual
