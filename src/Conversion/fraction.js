/**
 * Passthrough for the [fraction.js](https://github.com/infusion/Fraction.js/) constructor
 * _(Copyright © 2017 Robert Eisele, MIT license)_
 *
 * See [https://www.npmjs.com/package/fraction.js](https://www.npmjs.com/package/fraction.js) for more details.
 *
 * Provided for convenience and to encourage standardization.
 *
 * Accepts a number or string representation of a rational number and returns a `fraction.js` object.
 *
 * @function
 * @category Conversion
 * @sig String | Number -> Object
 * @param {(String | Number)} - The value to convert into a fraction.js object
 * @returns {Object} A fraction.js object
 * @example
 *
 * const fraction = require('@eluvio/elv-js-helpers/Conversion/fraction')
 *
 * fraction(4.2).toFraction(true)   //=> '4 1/5'
 *
 * fraction('22/7').valueOf()       //=> 3.142857142857143
 *
 * fraction('-22/7').s              //=> -1  (sign)
 *
 * fraction('-22/7').n              //=> 22  (numerator)
 *
 * fraction('-22/7').d              //=> 7   (denominator)
 *
 * fraction('9 3/4').valueOf()      //=> 9.75
 *
 */
const fraction = require('fraction.js')

module.exports = fraction
