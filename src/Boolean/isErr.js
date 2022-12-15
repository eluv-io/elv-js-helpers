const either = require('crocks/pointfree/either')

const F = require('../Functional/F')
const T = require('../Functional/T')

const isResult = require('./isResult')

/**
 * Returns `true` if passed a [Crocks Err](https://crocks.dev/docs/crocks/Result.html#err) instance.
 * Returns `false` if passed anything else
 *
 * @function
 * @category Boolean
 * @sig a -> Boolean
 * @param {*} x - The value to test
 * @returns {Boolean}
 * @example
 *
 * const isErr = require('@eluvio/elv-js-helpers/Boolean/isErr')
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
