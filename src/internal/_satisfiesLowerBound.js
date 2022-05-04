const curry = require('crocks/helpers/curry')

/**
 * Returns `true` if `value` satisfies specified bound, `false` otherwise
 *
 * Note that this function performs no type checking and relies on `comparatorFn` to determine if input satisfies bound.
 *
 * If called with fewer than 4 arguments, will return a [partially applied function](https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch04)
 *
 * @function
 * @curried
 * @private
 * @since v0.0.1
 * @category Logic
 * @sig a -> Boolean -> ((a, a) -> Integer) -> a -> Boolean
 * @param {Any} lowerBound - the lower bound to be satisfied
 * @param {Boolean} inclusive - if `true`, then `value` is allowed equal `lowerBound`
 * @param {Function} comparatorFn - The function to be used to compare `value` and `lowerBound`.
 * Must accept two values and return -1 if first value is less than the second,
 * 1 if the second value is less than the first, and zero otherwise.
 * @param {Any} value - The item to check against `lowerBound`
 * @returns {Boolean}
 *
 * @example
 *
 * const compare = require('@eluvio/elv-js-helpers/compare')
 *
 * _satisfiesLowerBound(0, true, compare, 42)   //=> true
 *
 * _satisfiesLowerBound(0, true, compare, 0)    //=> true
 *
 * _satisfiesLowerBound(0, true, compare, -1)   //=> false
 *
 * _satisfiesLowerBound(0, false, compare, 0)   //=> false
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
const _satisfiesLowerBound = curry(
  (lowerBound, inclusive, comparatorFn, value) => comparatorFn(lowerBound, value) < (inclusive ? 1 : 0)
)

module.exports = _satisfiesLowerBound
