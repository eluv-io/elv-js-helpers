const kind = require('../Validation/kind')

/**
 * Returns `true` if passed a regular expression.
 * Returns `false` if passed anything else
 *
 * @function
 * @category Boolean
 * @sig a -> Boolean
 * @param {*} x - The value to test
 * @returns {Boolean}
 * @example
 *
 * const isRegExp = require('@eluvio/elv-js-helpers/Boolean/isRegExp')
 *
 * isRegExp([1, 2, 3])         //=> false
 *
 * // extra arguments ignored:
 * isRegExp(1, /foo/)   //=> false
 *
 * isRegExp(/foo/)             //=> true
 *
 * // extra argument ignored:
 * isRegExp(/foo/, 3)          //=> true
 *
 */
const isRegExp = x => kind(x) === 'RegExp'

module.exports = isRegExp
