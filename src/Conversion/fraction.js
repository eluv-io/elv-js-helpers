'use strict'
const fraction = require('fraction.js')
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
 * 'use strict'
 * const fraction = require('@eluvio/elv-js-helpers/Conversion/fraction')
 *
 * fraction(4.2).toFraction(true)   //=> '4 1/5'
 *
 * fraction('foo').toFraction(true) //=> EXCEPTION: 'Invalid argument'
 *
 * fraction('1/0').toFraction(true) //=> EXCEPTION: 'Division by Zero'
 *
 * fraction(4.2).toFraction(true)   //=> '4 1/5'
 *
 * fraction('22/7').valueOf()       //=> 3.142857142857143
 *
 * // .s returns sign:
 * fraction('-22/7').s              //=> -1
 *
 * // .n returns numerator
 * fraction('-22/7').n              //=> 22
 *
 * // .d returns denominator
 * fraction('-22/7').d              //=> 7
 *
 * fraction('9 3/4').valueOf()      //=> 9.75
 *
 */

module.exports = fraction
