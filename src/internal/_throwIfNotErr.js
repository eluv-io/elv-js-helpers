const _typeWithOkErr = require('./_typeWithOkErr')
const _throwIfFalse = require('./_throwIfFalse')
const isErr = require('../isErr')

/**
 * Throws an exception if anything but a [Crocks Err](https://crocks.dev/docs/crocks/Result.html#err) is passed in.
 * Otherwise returns the `Err` unchanged.
 *
 * @function
 * @private
 * @category Validation
 * @sig Err a | b -> Err a | THROW
 * @param {Any} x - the value to check
 * @returns {Err}
 *
 * @example
 *
 * _throwIfNotErr(42) //=> EXCEPTION: 'Expected an Err, got: Number (42)'
 *
 */
const _throwIfNotErr = x =>
  _throwIfFalse(
    `Expected an Err, got: ${_typeWithOkErr(x)} (${x})`,
    isErr(x)
  )

module.exports = _throwIfNotErr
