const kindOf = require('kind-of')

/**
 * If value is not an array, returns an array containing the value,
 * otherwise returns the original value
 *
 * @function
 * @since v0.0.1
 * @category Conversion
 * @sig Non-array n => n | [a] -> [n] | [a]
 * @param {Any} x - The value to wrap in an array (if it is not already an array)
 * @returns {array}
 * @example
 *
 * wrapNonArray(42) //=> [42]
 *
 * wrapNonArray([42]) //=> [42]
 *
 * wrapNonArray([0, 42]) //=> [0, 42]
 *
 */
const wrapNonArray = x =>
  kindOf(x) === 'array' ?
    x :
    [x]

module.exports = wrapNonArray
