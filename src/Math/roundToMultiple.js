'use strict'
const curry = require('../Functional/curry')
/**
 * Rounds a value to nearest multiple of a specified number.
 *
 * If the value is halfway between two multiples, it will round upwards (more positively) if the multiplicand is positive,
 * and downwards (more negative) if the multiplicand is negative.
 *
 * Passing in zero as a multiplicand will result in a
 * [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) return value.
 *
 * @function
 * @curried
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} multiplicand the number to multiply to create the rounded number
 * @param {Number} value the number to round
 * @returns {Number} the value rounded to the nearest multiple
 * @example
 *
 * 'use strict'
 * const roundToMultiple = require('@eluvio/elv-js-helpers/Math/roundToMultiple')
 *
 * // Positive multiplicand
 * roundToMultiple(10, 13)        //=> 10
 *
 * roundToMultiple(10, 15)        //=> 20
 *
 * roundToMultiple(10, 19)        //=> 20
 *
 * roundToMultiple(0.5, 1.3)      //=> 1.5
 *
 * roundToMultiple(10, -13)       //=> -10
 *
 * roundToMultiple(10, -15)       //=> -10
 *
 * roundToMultiple(10, -19)       //=> -20
 *
 *
 * // Negative multiplicand
 * roundToMultiple(-10, 13)       //=> 10
 *
 * roundToMultiple(-10, 15)       //=> 10
 *
 * roundToMultiple(-10, 19)       //=> 20
 *
 * roundToMultiple(-10, -13)      //=> -10
 *
 * roundToMultiple(-10, -15)      //=> -20
 *
 * roundToMultiple(-10, -19)      //=> -20
 *
 * // Zero multiple
 * roundToMultiple(0, 1)          //=> NaN
 * roundToMultiple(0, 0)          //=> NaN
 * roundToMultiple(0, -1)         //=> NaN
 *
 * // Function is curried, call with fewer arguments to get a new, more specific function
 *
 * const roundToHundreds = roundToMultiple(100)
 *
 * roundToHundreds(125)           //=> 100
 *
 */
const roundToMultiple = curry(
  (multiplicand, value) => Math.round(value / multiplicand) * multiplicand
)

module.exports = roundToMultiple
