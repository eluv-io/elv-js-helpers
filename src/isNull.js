const kindOf = require('./kindOf')

/**
 * Returns `true` if passed `null`.
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
 * isString('foo')           //=> false
 *
 * isString(null, 3)         //=> true (extra argument ignored)
 *
 */
const isNull = x => kindOf(x) === 'null'

module.exports = isNull
