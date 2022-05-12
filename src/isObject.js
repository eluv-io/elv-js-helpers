const kindOf = require('./kindOf')

/**
 * Returns `true` if passed an object.
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
 * isObject([1, 2, 3])         //=> false
 *
 * isObject(1, {foo: 'bar'})   //=> false (extra argument ignored)
 *
 * isObject('foo')             //=> false
 *
 * isObject({})                //=> true (extra argument ignored)
 *
 * isObject({foo: 'bar'}, 3)   //=> true (extra argument ignored)
 *
 */
const isObject = x => kindOf(x) === 'object'

module.exports = isObject
