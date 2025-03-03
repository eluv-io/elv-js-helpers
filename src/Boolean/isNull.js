'use strict'
const kind = require('../Validation/kind')

/**
 * Returns `true` if passed `null`.
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
 * const isNull = require('@eluvio/elv-js-helpers/Boolean/isNull')
 *
 * isNull(null)              //=> true
 *
 * isNull()                  //=> false
 *
 * isNull(undefined)         //=> false
 *
 * isNull(0)                 //=> false
 *
 * // extra arguments ignored:
 * isNull(1, null, null)     //=> false
 *
 * isNull('foo')             //=> false
 *
 * // extra argument ignored:
 * isNull(null, 3)           //=> true
 *
 */
const isNull = x => kind(x) === 'null'

module.exports = isNull
