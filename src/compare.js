const comparator = require('ramda/src/comparator')
const lt = require('ramda/src/lt')

/**
 * Compares two items `x` and `y` using Javascript's
 * [less than (<)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than)
 * operator, and returns:
 *
 * * `-1` if `x < y`
 * * `0` if `x == y` (more specifically, if neither `x < y` nor `y < x` are `true`)
 * * `1` if `y < x`
 *
 * Used as an input into sorting and validation functions.
 *
 * @function
 * @curried
 * @since v0.0.1
 * @category Functional
 * @sig a -> b -> -1 | 0 | 1
 * @returns {Integer} -1 | 0 | 1
 *
 * @example
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
 * compare([1], 'a')        //= -1
 *
 */
const compare = comparator(lt)

module.exports = compare
