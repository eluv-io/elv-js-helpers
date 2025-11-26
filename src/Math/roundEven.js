'use strict'
const roundToMultiple = require('./roundToMultiple')
/**
 * Rounds a value to the nearest even number.
 *
 * If the value is halfway between two even numbers, it will round upwards (more positively).
 *
 * @function
 * @category Math
 * @sig Number -> Number
 * @param {Number} value the number to round
 * @returns {Number} the value rounded to the nearest even number
 * @example
 *
 * 'use strict'
 * const roundEven = require('@eluvio/elv-js-helpers/Math/roundEven')
 *
 * roundEven(4.1)        //=> 4
 *
 * roundEven(4.5)        //=> 4
 *
 * roundEven(4.9)        //=> 4
 *
 * roundEven(5)          //=> 6
 *
 * roundEven(5.1)        //=> 6
 *
 * roundEven(5.5)        //=> 6
 *
 * roundEven(-4.1)       //=> -4
 *
 * roundEven(-4.5)       //=> -4
 *
 * roundEven(-4.9)       //=> -4
 *
 * roundEven(-5)         //=> -4
 *
 * roundEven(-5.1)       //=> -6
 *
 * roundEven(-5.5)       //=> -6
 *
 */
const roundEven = roundToMultiple(2)

module.exports = roundEven
