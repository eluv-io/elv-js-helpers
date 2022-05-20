const kindOf = require('./kindOf')

const _throwIfNotErr = require('./_throwIfNotErr')
const _throwIfFalse = require('./throwIfFalse')

const resultUnwrap = require('../Conversion/resultUnwrap')

/**
 * Throws an exception if input is not a [Crocks Err](https://crocks.dev/docs/crocks/Result.html#err) instance that
 * wraps an array. Otherwise returns the Err unchanged.
 *
 * Used to ensure a clearer exception message if somehow an Err is encountered that does not wrap an array.
 *
 * @function
 * @private
 * @category Validation
 * @sig * -> Err e | THROW
 * @param {*} x - the value to check (should be an Err instance)
 * @returns {Err}
 * @example
 *
 * // NOTE: To demonstrate exception, we need to import original version of Err from Crocks, because
 * // src/ADT/Err.js automatically wraps non-array values
 * const {Err} = require('crocks/Result')
 *
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
 *
 * const _throwIfErrNotArray = require('@eluvio/elv-js-helpers/Validation/_throwIfErrNotArray')
 *
 * _throwIfErrNotArray(Err(['invalid query'])) //=> Err [ "invalid query" ]
 *
 * _throwIfErrNotArray(Err('invalid query'))   //=> EXCEPTION: "Err instance does not contain an array, instead contains: string (invalid query)"
 *
 * _throwIfErrNotArray(Ok(42))                 //=> EXCEPTION: "Expected an Err, got: Ok (Ok 42)"
 *
 * _throwIfErrNotArray(42)                     //=> EXCEPTION: "Expected an Err, got: Number (42)"
 *
 */
const _throwIfErrNotArray = x =>
  _throwIfNotErr(x) &&
  _throwIfFalse(
    `Err instance does not contain an array, instead contains: ${kindOf(resultUnwrap(x))} (${resultUnwrap(x)})`,
    kindOf(resultUnwrap(x)) === 'array'
  ) && x

module.exports = _throwIfErrNotArray
