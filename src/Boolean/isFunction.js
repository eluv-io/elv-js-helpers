const kindOf = require('../Validation/kindOf')

/**
 * Returns `true` if passed a function.
 * Returns `false` if passed anything else
 *
 * @function
 * @category Boolean
 * @sig a -> Boolean
 * @param {*} x - The value to test
 * @returns {Boolean}
 * @example
 *
 * const isFunction = require('@eluvio/elv-js-helpers/Boolean/isFunction')
 *
 * isFunction([1, 2, 3])   //=> false
 *
 * isFunction(1, 2, 3)     //=> false
 *
 * isFunction('foo')       //=> false
 *
 * isFunction(isFunction)  //=> true
 *
 */
const isFunction = x => kindOf(x) === 'function'

module.exports = isFunction
