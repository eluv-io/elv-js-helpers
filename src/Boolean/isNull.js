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
 * isNull(1, null, null)     //=> false (extra arguments ignored)
 *
 * isNull('foo')             //=> false
 *
 * isNull(null, 3)           //=> true (extra argument ignored)
 *
 */
const isNull = x => kind(x) === 'null'

module.exports = isNull
