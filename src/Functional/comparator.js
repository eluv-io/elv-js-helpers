const curry = require('./curry')

/**
 * Copies name and functionality of Ramda's `comparator` function _(Copyright © Scott Sauyet and Michael Hurley)_
 *
 * When supplied with a boolean 2-input function `f`, will return another 2-input function that returns:
 *
 *    -1 if `f(a, b)` is `true`
 *     1 if `f(b, a)` is `true`
 *     0 otherwise
 *
 * This function can be passed in as a compare function to
 * e.g. Javascript's [Array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
 * method.
 *
 * @function
 * @category Functional
 * @sig (a -> a -> Boolean) -> (a -> b -> -1 | 0 | 1)
 * @param {Function} fn - the 2-input function (returning Boolean) to use for testing inputs
 * @returns {Function} - a 2-input comparator function that returns -1, 0, or 1
 * @example
 *
 * const comparator = require('@eluvio/elv-js-helpers/Functional/comparator')
 *
 * const isLT = require('@eluvio/elv-js-helpers/Boolean/isLT')
 * const isGT = require('@eluvio/elv-js-helpers/Boolean/isGT')
 *
 * const compAscending = comparator(isGT)
 * const compDescending = comparator(isLT)
 *
 * let data = [1, 42, -42, 0]
 *
 * data.sort(compAscending)
 * console.log(data)             //=> OUTPUT: [-42, 0, 1, 42]
 *
 * data.sort(compDescending)
 * console.log(data)             //=> OUTPUT: [42, 1, 0, -42]
 *
 */
const comparator = fn => curry(
  (a, b) => fn(a, b)
    ? -1
    : fn(b, a)
      ? 1
      : 0
)

module.exports = comparator
