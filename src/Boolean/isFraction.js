'use strict'
const fraction = require('../Conversion/fraction')

/**
 * Returns `true` if passed a [fraction.js](https://github.com/infusion/Fraction.js/) object.
 * _fraction.js (Copyright © 2017 Robert Eisele, MIT license)_
 *
 * Returns `false` if passed anything else
 *
 * @function
 * @category Boolean
 * @sig a -> Boolean
 * @param {*} x - The value to test
 * @returns {Boolean}
 * @example
 *
 * 'use strict'
 * const isFraction = require('@eluvio/elv-js-helpers/Boolean/isFraction')
 *
 * const fraction = require('@eluvio/elv-js-helpers/Conversion/fraction')
 *
 * const twoOverOne = fraction('2')
 * const sortOfPi = fraction('22/7')
 *
 * isFraction(twoOverOne)  //=> true
 * isFraction(sortOfPi)    //=> true
 *
 * isFraction(22/7)        //=> false
 *
 * isFraction(Infinity)    //=> false
 *
 * isFraction(NaN)         //=> false
 *
 * isFraction('foo')       //=> false
 *
 */
const isFraction = x => x instanceof fraction

module.exports = isFraction


