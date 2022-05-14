/**
 * Passthrough for the [Fraction.js](https://github.com/infusion/Fraction.js/) constructor. (Copyright © 2017 Robert Eisele, MIT license)
 *
 * See [https://www.npmjs.com/package/fraction.js](https://www.npmjs.com/package/fraction.js) for more details.
 *
 * Provided for convenience and to encourage standardization.
 *
 * Accepts a number or string representation of a rational number and returns a `Fraction.js` object.
 *
 * @function
 * @category Conversion
 * @sig String | Number -> Object
 * @param {(String | Number)} - The value to convert into a Fraction.js object
 * @returns {Object} A Fraction.js object
 * @example
 *
 * Fraction(4.2).toFraction(true)   //=> '4 1/5`
 *
 * Fraction('22/7').valueOf()       //=> 3.142857142857143
 *
 * Fraction('9 3/4').valueOf()      //=> 9.75
 *
 */
const Fraction = require('fraction.js')

module.exports = Fraction
