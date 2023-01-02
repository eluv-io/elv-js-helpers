const type = require('crocks/core/type')

/**
 * Returns `true` if passed a [Crocks Result](https://crocks.dev/docs/crocks/Result.html) instance.
 * Returns `false` if passed anything else
 *
 * @function
 * @category Boolean
 * @sig a -> Boolean
 * @param {*} x - The value to test
 * @returns {Boolean}
 * @example
 *
 * const isResult = require('@eluvio/elv-js-helpers/Boolean/isResult')
 *
 * const Err = require('@eluvio/elv-js-helpers/ADT/Err')
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
 *
 * isResult(Err(['invalid query'])) //=> true
 *
 * isResult(Ok(42))                 //=> true
 *
 * isResult('foo')                  //=> false
 *
 */
const isResult = x => type(x) === 'Result'

module.exports = isResult
