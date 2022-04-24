const either = require('crocks/pointfree/either')
const {T,F} = require('ramda')

const isResult = require('./isResult')

/**
 * Returns `true` if passed a [Crocks Err](https://crocks.dev/docs/crocks/Result.html#err) instance.
 * Returns `false` if passed anything else
 *
 * @function
 * @since v0.0.1
 * @category Logic
 * @sig a -> Boolean
 * @param {Any} x - The value to test
 * @returns {Boolean}
 *
 * @example
 *
 * isErr(Err(['invalid query'])) //=> true
 *
 * isErr(Ok(42)) //=> false
 *
 * isErr('foo') //=> false
 *
 */
const isErr = x => isResult(x) && either(T, F, x)

module.exports = isErr
