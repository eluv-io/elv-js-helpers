'use strict'
/**
 * Converts an array of booleans to a number by interpreting them as binary digits (most significant bits first)
 *
 * @function
 * @category Conversion
 * @sig [Boolean] -> Integer
 * @param {Boolean[]} boolArray An array of booleans representing binary digits of a non-negative integer (most significant bit first)
 * @returns {Integer}
 * @example
 *
 * 'use strict'
 * const boolsToInt = require('@eluvio/elv-js-helpers/Conversion/boolsToInt')
 *
 * boolsToInt([false, false, true]) //=> 1
 *
 * boolsToInt([true, false])        //=> 2
 *
 * boolsToInt([true, true, true])   //=> 7
 *
 */
const boolsToInt = boolArray =>
  boolArray.reduce(
    (acc, val) => acc << 1 | val,
    0
  )

module.exports = boolsToInt
