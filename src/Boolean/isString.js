const kindOf = require('../Validation/kindOf')

/**
 * Returns `true` if passed a string.
 * Returns `false` if passed anything else
 *
 * @function
 * @category Boolean
 * @sig a -> Boolean
 * @param {*} x - The value to test
 * @returns {Boolean}
 * @example
 *
 * const isString = require('@eluvio/elv-js-helpers/Boolean/isString')
 *
 * isString([1, 2, 3])         //=> false
 *
 * isString(1, 'foo', 'bar')   //=> false (extra arguments ignored)
 *
 * isString('foo')             //=> true
 *
 * isString('foo', 3)          //=> true (extra argument ignored)
 *
 */
const isString = x => kindOf(x) === 'string'

module.exports = isString
