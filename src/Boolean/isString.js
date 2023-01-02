const kind = require('../Validation/kind')

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
 * // extra arguments ignored:
 * isString(1, 'foo', 'bar')   //=> false
 *
 * isString('foo')             //=> true
 *
 * // extra argument ignored:
 * isString('foo', 3)          //=> true
 *
 */
const isString = x => kind(x) === 'String'

module.exports = isString
