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
 * @category Logic
 * @sig a -> Boolean -> ((a, a) -> Integer) -> a -> Boolean
 * @param {Any} upperBound - the upper bound to be satisfied
 * @param {Boolean} inclusive - if `true`, then `value` is allowed equal `upperBound`
 * @param {Function} comparatorFn - The function to be used to compare `value` and `upperBound`.
 * Must accept two values and return -1 if first value is less than the second,
 * 1 if the second value is less than the first, and zero otherwise.
 * @param {Any} value - The item to check against `upperBound`
 * @returns {Boolean}
 *
 * @example
 *
 * const compare = require('@eluvio/elv-js-helpers/compare')
 *
 * _satisfiesUpperBound(42, true, compare, 42)   //=> false
 *
 * _satisfiesUpperBound(42, true, compare, 0)    //=> true
 *
 * _satisfiesUpperBound(42, true, compare, -1)   //=> true
 *
 * _satisfiesUpperBound(42, false, compare, 42)  //=> false
 *
 * // function is curried: call with fewer params to obtain a narrower function
 * const isNegative = _satisfiesUpperBound(0, false, compare)
 *
 * isNegative(-1)  //=> true
 *
 * isNegative(0)   //=> false
 *
 * isNegative(1)   //=> false
 */
const _satisfiesUpperBound = curry(
  (upperBound, inclusive, comparatorFn, value) => comparatorFn(value, upperBound) < (inclusive ? 1 : 0)
)

module.exports = _satisfiesUpperBound
