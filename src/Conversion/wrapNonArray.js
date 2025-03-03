'use strict'
const isArray = require('../Boolean/isArray')

/**
 * If value is not an array, returns an array containing the value,
 * otherwise returns the original value
 *
 * @function
 * @category Conversion
 * @sig Non-array n => n | [a] -> [n] | [a]
 * @param {*} x - The value to wrap in an array (if it is not already an array)
 * @returns {array}
 * @example
 *
 * 'use strict'
 * const wrapNonArray = require('@eluvio/elv-js-helpers/Conversion/wrapNonArray')
 *
 * wrapNonArray(42)      //=> [42]
 *
 * wrapNonArray([42])    //=> [42]
 *
 * wrapNonArray([0, 42]) //=> [0, 42]
 *
 */
const wrapNonArray = x =>
  isArray(x) ?
    x :
    [x]

module.exports = wrapNonArray
