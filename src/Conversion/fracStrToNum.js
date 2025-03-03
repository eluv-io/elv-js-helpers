'use strict'
const fraction = require('./fraction')

const FractionStrModel = require('../Model/FractionStrModel')

/**
 * Evaluates string as a rational number using [fraction.js](https://github.com/infusion/Fraction.js/)
 * and converts to a number.
 *
 * @function
 * @category Conversion
 * @sig string -> number
 * @param {String} str - A string representing a fraction or whole number
 * @returns {Number}
 * @example
 *
 * 'use strict'
 * const fracStrToNum = require('@eluvio/elv-js-helpers/Conversion/fracStrToNum')
 *
 * fracStrToNum('1')        //=> 1
 *
 * fracStrToNum('1/2')      //=> 0.5
 *
 * fracStrToNum(9)          //=> EXCEPTION: 'expecting String, got Number 9'
 *
 * fracStrToNum('1/0')      //=> EXCEPTION: 'Value must be a string in the form of a whole number or a fraction (got: "1/0")'
 *
 * fracStrToNum('0/1')      //=> 0
 *
 */
const fracStrToNum = str => fraction(FractionStrModel(str)).valueOf()

module.exports = fracStrToNum
