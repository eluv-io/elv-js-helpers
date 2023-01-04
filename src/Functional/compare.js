const comparator = require('./comparator')
const flip = require('./flip')

const isLT = require('../Boolean/isLT')

/**
 * Compares two items `x` and `y` using Javascript's
 * [less than (<)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than)
 * operator, and returns:
 *
 * * `-1` if `x < y`
 * * `1` if `y < x`
 * * `0` otherwise (`x` and `y` may not be equal, e.g. `null < undefined` and `undefined < null` are both `false`)
 *
 * Used as an input into sorting and validation functions.
 *
 * @function
 * @curried
 * @category Functional
 * @sig a -> b -> -1 | 0 | 1
 * @param {*} x - A value that can be compared with `<`
 * @param {*} y - A value that can be compared with `<`
 * @returns {Integer} -1 | 0 | 1
 * @example
 *
 * const compare = require('@eluvio/elv-js-helpers/Functional/compare')
 *
 * compare(1, 2)            //=> -1
 *
 * compare(2, 2)            //=> 0
 *
 * compare(2, 1)            //=> 1
 *
 * compare('a', 'b')        //=> -1
 *
 * compare(null, undefined) //=> 0
 *
 * compare(undefined, null) //=> 0
 *
 * compare([1], 'a')        //= -1
 *
 */
const compare = comparator(flip(isLT))

module.exports = compare
