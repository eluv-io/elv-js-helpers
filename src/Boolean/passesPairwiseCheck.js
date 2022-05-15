const aperture = require('ramda/src/aperture')
const find = require('ramda/src/find')

const curry = require('../Functional/curry')

/**
 * Returns true if all pairs of neighbors in `array` return true when fed into `checkFn`.
 *
 * Can be used to verify ordering, e.g. if `checkFn` is `(x,y) => x <= y` then `array` must be in ascending order.
 *
 * @function
 * @curried
 * @category Boolean
 * @sig ((a, a) -> Boolean) -> Array -> Boolean
 * @param {Function} checkFn - 2-input function that returns `true` if the inputs pass check, `false` otherwise
 * @param {Array} array - Array or other iterable with elements to check
 * @returns {Boolean}
 * @example
 *
 * const passesPairwiseCheck = require('@eluvio/elv-js-helpers/Boolean/passesPairwiseCheck')
 *
 * const is(0, true, compare, [1, 2, 3])   //=> true
 *
 * _satisfiesOrdering(0, true, compare, 0)    //=> true
 *
 * _satisfiesOrdering(0, true, compare, -1)   //=> false
 *
 * _satisfiesOrdering(0, false, compare, 0)   //=> false
 *
 * // function is curried: call with fewer params to obtain a narrower function
 * const isPositive = _satisfiesLowerBound(0, false, compare)
 *
 * isPositive(-1)  //=> false
 *
 * isPositive(0)   //=> false
 *
 * isPositive(1)   //=> true
 */
const passesPairwiseCheck = curry(
  (checkFn, array) => find(
    pair => !checkFn(pair[0], pair[1]),
    aperture(2, array)
  ) === undefined
)

module.exports = passesPairwiseCheck
