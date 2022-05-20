const type = require('crocks/core/type')

const _throwIfFalse = require('./throwIfFalse')
const isResult = require('../Boolean/isResult')

/**
 * Throws an exception if anything but a [Crocks Result](https://crocks.dev/docs/crocks/Result.html) is passed in.
 * Otherwise returns the `Result` unchanged.
 *
 * @function
 * @private
 * @category Validation
 * @sig Result a | b -> Result a | THROW
 * @param {*} x - the value to check
 * @returns {Result}
 * @example
 *
 * const _throwIfNotResult = require('@eluvio/elv-js-helpers/Validation/_throwIfNotResult')
 *
 *  _throwIfNotResult(42)            //=> EXCEPTION: 'Expected a value of type Result, got: Number (42)'
 * _throwIfNotResult(Err(['42']))    //=> Err [ "42" ]
 * _throwIfNotResult(Ok(42))         //=> Ok 42
 *
 */
const _throwIfNotResult = x =>
  _throwIfFalse(
    `Expected a value of type Result, got: ${type(x)} (${x})`,
    isResult(x)
  ) && x

module.exports = _throwIfNotResult
