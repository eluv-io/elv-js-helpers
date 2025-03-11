'use strict'
const isFraction = require('../Boolean/isFraction')

/**
 * Convert a [fraction.js](https://github.com/infusion/Fraction.js/) object to a Javascript [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number).
 *  _(fraction.js Copyright © 2017 Robert Eisele, MIT license)_
 *
 * See [https://www.npmjs.com/package/fraction.js](https://www.npmjs.com/package/fraction.js) for more details.
 *
 * Provided for use in function composition.
 *
 * Accepts a `fraction.js` object and returns a Javascript number.
 *
 * @function
 * @category Conversion
 * @sig Object -> Number | EXCEPTION
 * @param {(Object)} f - A fraction.js object
 * @returns {Number} The Javascript number representation of the fraction
 * @example
 *
 * 'use strict'
 * const fracToNum = require('@eluvio/elv-js-helpers/Conversion/fracToNum')
 *
 * const fraction = require('@eluvio/elv-js-helpers/Conversion/fraction')
 *
 * const myFraction = fraction(4.2)
 *
 * fracToNum(myFraction)         //=> 4.2
 *
 * const pi = fraction('22/7')
 *
 * fracToNum(pi)                 //=> 3.142857142857143
 *
 * fracToNum('22/7')              //=> EXCEPTION: 'Value is not a fraction.js object'
 *
 *
 */

const fracToNum = f => {
  if (isFraction(f)) {
    return f.valueOf()
  } else {
    throw Error('Value is not a fraction.js object')
  }

}

module.exports = fracToNum
