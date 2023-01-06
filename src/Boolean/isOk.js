const either = require('crocks/pointfree/either')
const F = require('../Functional/F')
const isResult = require('./isResult')
const T = require('../Functional/T')

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
 * const Err = require('@eluvio/elv-js-helpers/ADT/Err')
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
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
