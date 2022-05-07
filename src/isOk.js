const either = require('crocks/pointfree/either')

const F = require('ramda/src/F')
const T = require('ramda/src/T')

const isResult = require('./isResult')

/**
 * Returns `true` if passed a [Crocks Ok](https://crocks.dev/docs/crocks/Result.html#ok) instance.
 * Returns `false` if passed anything else
 *
 * @function
 * @category Logic
 * @sig a -> Boolean
 * @param {Any} x - The value to test
 * @returns {Boolean}
 *
 * @example
 *
 * isOk(Err(['invalid query'])) //=> false
 *
 * isOk(Ok(42))                 //=> true
 *
 * isOk('foo')                  //=> false
 *
 */
const isOk = x => isResult(x) && either(F, T, x)

module.exports = isOk
