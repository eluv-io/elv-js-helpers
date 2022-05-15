const kindOf = require('../Validation/kindOf')

/**
 * Returns `true` if passed an array.
 * Returns `false` if passed anything else
 *
 * @function
 * @category Boolean
 * @sig a -> Boolean
 * @param {*} x - The value to test
 * @returns {Boolean}
 * @example
 *
 * const isArray = require('@eluvio/elv-js-helpers/Boolean/isArray')
 *
 * isArray([1, 2, 3]) //=> true
 *
 * isArray(1, 2, 3)   //=> false
 *
 * isArray('foo')     //=> false
 *
 */
const isArray = x => kindOf(x) === 'array'

module.exports = isArray


