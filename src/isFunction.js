const kindOf = require('./kindOf')

/**
 * Returns `true` if passed a function.
 * Returns `false` if passed anything else
 *
 * @function
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x - The value to test
 * @returns {Boolean}
 *
 * @example
 *
 * isFunction([1, 2, 3])   //=> true
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
