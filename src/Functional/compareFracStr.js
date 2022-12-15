const comparator = require('ramda/src/comparator')

const Fraction = require('../Conversion/fraction')
const FractionStrModel = require('../Model/FractionStrModel')

/**
 * Compares two strings `x` and `y` using [fraction.js](https://github.com/infusion/Fraction.js/)
 * and returns:
 *
 * * `-1` if `x < y`
 * * `0` if `x == y` (more specifically, if neither `x < y` nor `y < x` are `true`)
 * * `1` if `y < x`
 *
 * Used as an input into sorting and validation functions.
 *
 * @function
 * @curried
 * @category Functional
 * @sig a -> b -> -1 | 0 | 1
 * @param {String} str1 - A string representing a fraction or whole number
 * @param {String} str2 - A string representing a fraction or whole number
 * @returns {Integer} -1 | 0 | 1
 * @example
 *
 * const compareFrac = require('@eluvio/elv-js-helpers/Functional/compareFrac')
 *
 * compareFracStr('1', '2')        //=> -1
 *
 * compareFracStr('1/2', '1/4')    //=> 1
 *
 * compareFracStr(2, 1)            //=> EXCEPTION: 'expecting String, got Number 2'
 *
 * compareFracStr('a', 'b')        //=> EXCEPTION: 'Value must be a string in the form of a whole number or a fraction (got: "a")'
 *
 * compareFracStr(null, undefined) //=> EXCEPTION: 'expecting String, got null'
 *
 * compareFracStr(0.5, '1/2')      //= EXCEPTION: 'expecting String, got Number 0.5'
 *
 */
const compareFracStr = comparator(
  (str1, str2) => Fraction(FractionStrModel(str1)).compare(Fraction(FractionStrModel(str2))) < 0
)

module.exports = compareFracStr
