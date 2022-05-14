const comparator = require('ramda/src/comparator')

const Fraction = require('./Fraction')
const FractionStrModel = require('./FractionStrModel')

/**
 * Compares two strings `x` and `y` using [Fraction.js](https://github.com/infusion/Fraction.js/)
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
 * @param {String} str1 - A string
 * @returns {Integer} -1 | 0 | 1
 *
 * @example
 *
 * compareFrac('1', '2')        //=> -1
 *
 * compareFrac('1/2', '1/4')    //=> 1
 *
 * compareFrac(2, 1)            //=> EXCEPTION: 'expecting String, got Number 2'
 *
 * compareFrac('a', 'b')        //=> EXCEPTION: 'Invalid argument'
 *
 * compareFrac(null, undefined) //=> EXCEPTION: 'expecting String, got null'
 *
 * compareFrac(0.5, '1/2')      //= EXCEPTION: 'expecting String, got Number 0.5'
 *
 */
const compareFracStr = comparator(
  (str1, str2) => Fraction(FractionStrModel(str1)).compare(Fraction(FractionStrModel(str2))) < 0
)

module.exports = compareFracStr
