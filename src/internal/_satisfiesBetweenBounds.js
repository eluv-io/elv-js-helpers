const curry = require('crocks/helpers/curry')

const _satisfiesLowerBound = require('./_satisfiesLowerBound')
const _satisfiesUpperBound = require('./_satisfiesUpperBound')

/**
 * Returns `true` if `value` satisfies specified bounds, `false` otherwise
 *
 * If called with fewer than 4 arguments, will return a [partially applied function](https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch04)
 *
 * @function
 * @private
 * @since v0.0.1
 * @category Logic
 * @sig a -> Boolean -> ((a, a) -> Integer) -> a -> Boolean
 * @param {Any} lowerBound - the lower bound to be satisfied
 * @param {Any} upperBound - the upper bound to be satisfied
 * @param {Boolean} lowerInclusive - if `true`, then `value` is allowed equal `lowerBound`
 * @param {Boolean} upperInclusive - if `true`, then `value` is allowed equal `upperBound`
 * @param {Function} comparatorFn - The function to be used to compare `value` with `lowerBound` and `upperBound`.
 * Must accept two values and return -1 if first value is less than the second,
 * 1 if the second value is less than the first, and zero otherwise.
 * @param {Any} value - The item to check against `lowerBound` and `upperBound`
 * @returns {Boolean}
 *
 * @example
 *
 * const compare = require('@eluvio/elv-js-helpers/compare')
 *
 * _satisfiesBetweenBounds(0, 42, true, true, compare, 42)    //=> true
 *
 * _satisfiesBetweenBounds(0, 42, true, true, compare, 0)     //=> true
 *
 * _satisfiesBetweenBounds(0, 42, true, true, compare, -1)    //=> false
 *
 * _satisfiesBetweenBounds(0, 42, false, false, compare, 0)   //=> false
 *
 */
const _satisfiesBetweenBounds = curry(
  (lowerBound, upperBound, lowerInclusive, upperInclusive, comparatorFn, value) =>
    _satisfiesLowerBound(lowerBound, lowerInclusive, comparatorFn, value) &&
    _satisfiesUpperBound(upperBound, upperInclusive, comparatorFn, value)
)

module.exports = _satisfiesBetweenBounds
