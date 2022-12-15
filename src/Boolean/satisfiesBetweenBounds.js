const curry = require('../Functional/curry')

const _satisfiesLowerBound = require('./satisfiesLowerBound')
const _satisfiesUpperBound = require('./satisfiesUpperBound')

/**
 * Returns `true` if `value` satisfies specified bounds, `false` otherwise
 *
 * Note that this function performs no type checking and relies on `comparatorFn` to determine if input satisfies bounds.
 *
 * If called with fewer than 6 arguments, will return a [partially applied function](https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch04)
 *
 * @function
 * @curried
 * @category Boolean
 * @sig a -> Boolean -> ((a, a) -> Integer) -> a -> Boolean
 * @param {*} lowerBound - the lower bound to be satisfied
 * @param {*} upperBound - the upper bound to be satisfied
 * @param {Boolean} lowerInclusive - if `true`, then `value` is allowed equal `lowerBound`
 * @param {Boolean} upperInclusive - if `true`, then `value` is allowed equal `upperBound`
 * @param {Function} comparatorFn - The function to be used to compare `value` with `lowerBound` and `upperBound`.
 * Must accept two values and return -1 if first value is less than the second,
 * 1 if the second value is less than the first, and zero otherwise.
 * @param {*} value - The item to check against `lowerBound` and `upperBound`
 * @returns {Boolean}
 * @example
 *
 * const satisfiesBetweenBounds = require('@eluvio/elv-js-helpers/Boolean/satisfiesBetweenBounds')
 *
 * const compare = require('@eluvio/elv-js-helpers/Functional/compare')
 *
 * satisfiesBetweenBounds(0, 42, true, true, compare, 42)    //=> true
 *
 * satisfiesBetweenBounds(0, 42, true, true, compare, 0)     //=> true
 *
 * satisfiesBetweenBounds(0, 42, true, true, compare, -1)    //=> false
 *
 * satisfiesBetweenBounds(0, 42, false, false, compare, 0)   //=> false
 *
 * // function is curried: call with fewer params to obtain a narrower function
 * const isFromZeroToOne = satisfiesBetweenBounds(0, 1, true, true, compare)
 *
 * isFromZeroToOne(0.5) //=> true
 *
 * isFromZeroToOne(1)   //=> true
 *
 * isFromZeroToOne(1.5) //=> false
 *
 */
const satisfiesBetweenBounds = curry(
  (lowerBound, upperBound, lowerInclusive, upperInclusive, comparatorFn, value) =>
    _satisfiesLowerBound(lowerBound, lowerInclusive, comparatorFn, value) &&
    _satisfiesUpperBound(upperBound, upperInclusive, comparatorFn, value)
)

module.exports = satisfiesBetweenBounds
