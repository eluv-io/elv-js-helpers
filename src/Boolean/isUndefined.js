const kind = require('../Validation/kind')

/**
 * Returns `true` if passed `undefined`.
 * Returns `false` if passed anything else
 *
 * @function
 * @category Boolean
 * @sig a -> Boolean
 * @param {*} x - The value to test
 * @returns {Boolean}
 * @example
 *
 * const isUndefined = require('@eluvio/elv-js-helpers/Boolean/isUndefined')
 *
 * isUndefined()              //=> true
 *
 * isUndefined(undefined)     //=> true
 *
 * isUndefined(null)          //=> false
 *
 * isUndefined(1, undefined)  //=> false (extra arguments ignored)
 *
 * isUndefined('foo')         //=> false
 *
 * isUndefined(undefined, 3)  //=> true (extra argument ignored)
 *
 */
const isUndefined = x => kind(x) === 'undefined'

module.exports = isUndefined
