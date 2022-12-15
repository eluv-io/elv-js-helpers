const either = require('crocks/pointfree/either')

const F = require('../Functional/F')
const T = require('../Functional/T')

const isResult = require('./isResult')

/**
 * Returns `true` if passed a [Crocks Ok](https://crocks.dev/docs/crocks/Result.html#ok) instance.
 * Returns `false` if passed anything else
 *
 * @function
 * @category Boolean
 * @sig a -> Boolean
 * @param {*} x - The value to test
 * @returns {Boolean}
 * @example
 *
 * const isOk = require('@eluvio/elv-js-helpers/Boolean/isOk')
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
