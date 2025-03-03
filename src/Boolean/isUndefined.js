'use strict'
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
 * 'use strict'
 * const isUndefined = require('@eluvio/elv-js-helpers/Boolean/isUndefined')
 *
 * isUndefined()              //=> true
 *
 * isUndefined(undefined)     //=> true
 *
 * isUndefined(null)          //=> false
 *
 * // extra argument ignored:
 * isUndefined(1, undefined)  //=> false
 *
 * isUndefined('foo')         //=> false
 *
 * // extra argument ignored:
 * isUndefined(undefined, 3)  //=> true
 *
 */
const isUndefined = x => kind(x) === 'undefined'

module.exports = isUndefined
