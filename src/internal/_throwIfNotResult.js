const type = require('crocks/core/type')

const _throwIfFalse = require('./_throwIfFalse')
const isResult = require('../isResult')

/**
 * Throws an exception if anything but a [Crocks Result](https://crocks.dev/docs/crocks/Result.html) is passed in.
 * Otherwise returns the `Result` unchanged.
 *
 * @function
 * @private
 * @since v0.0.1
 * @category Validation
 * @sig Result a | b -> Result a | THROW
 * @param {Any} x - the value to check
 * @returns {Result}
 *
 * @example
 *
 * _throwIfNotResult(42) //=> EXCEPTION: 'Expected a value of type Result, got: Number (42)'
 *
 */
const _throwIfNotResult = x =>
  _throwIfFalse(
    `Expected a value of type Result, got: ${type(x)} (${x})`,
    isResult(x)
  )

module.exports = _throwIfNotResult
