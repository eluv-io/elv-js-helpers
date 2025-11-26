'use strict'
const curry = require('../Functional/curry')
/**
 * Calculates change between 2 values, expressed as a proportion of the (absolute value of) first value, e.g.:
 *
 *  * Returns `0` if both values are the same
 *  * Returns `0.5` if second value is 50% bigger than the first value
 *  * Returns `-0.5` if second value is 50% smaller than the first value
 *
 * Note that if the first value is `0` the return value will be:
 *
 *  * `Infinity` if the second value is positive
 *  * `-Infinity` if the second value is negative
 *  * `0` if the second value is zero
 *
 * Note that if the first value is negative, "growth" is defined as "becoming less negative", e.g. `growth(-100, 0) == 1`
 *
 * @function
 * @curried
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} oldValue starting (baseline) value
 * @param {Number} newValue ending value for calculating growth amount
 * @returns {Number} growth expressed as a proportion of the absolute value of the first value
 * @example
 *
 * 'use strict'
 * const growth = require('@eluvio/elv-js-helpers/Math/growth')
 *
 * // Positive starting value
 * growth(42, 420)        //=> 9
 *
 * growth(42, 84)         //=> 1
 *
 * growth(42, 63)         //=> 0.5
 *
 * growth(42, 42)         //=> 0
 *
 * growth(42, 21)         //=> -0.5
 *
 * growth(42, 0)          //=> -1
 *
 * growth(42, -42)        //=> -2
 *
 * // Negative starting value
 * growth(-42, -84)       //=> -1
 *
 * growth(-42, 0)         //=> 1
 *
 * growth(-42, 42)        //=> 2
 *
 * // Zero starting value
 * growth(0, 1)           //=> Infinity
 * growth(0, 0)           //=> 0
 * growth(0, -1)          //=> -Infinity
 *
 */
const growth = curry(
  (oldValue, newValue) => (newValue === 0 && oldValue === 0) ? 0 : (newValue - oldValue) / Math.abs(oldValue)
)

module.exports = growth
