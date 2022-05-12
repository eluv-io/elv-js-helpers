const either = require('crocks/pointfree/either')

const F = require('ramda/src/F')
const T = require('ramda/src/T')

const isResult = require('./isResult')

/**
 * Returns `true` if passed a [Crocks Err](https://crocks.dev/docs/crocks/Result.html#err) instance.
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
 * isErr(Err(['invalid query'])) //=> true
 *
 * isErr(Ok(42))                 //=> false
 *
 * isErr('foo')                  //=> false
 *
 */
const isErr = x => isResult(x) && either(T, F, x)

module.exports = isErr
