const type = require('crocks/core/type')

/**
 * Returns `true` if passed a [Crocks Result](https://crocks.dev/docs/crocks/Result.html) instance.
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
 * isResult(Err(['invalid query'])) //=> true
 *
 * isResult(Ok(42)) //=> true
 *
 * isResult('foo') //=> false
 *
 */
const isResult = x => type(x) === 'Result'

module.exports = isResult
