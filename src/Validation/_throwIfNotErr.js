const _typeWithOkErr = require('./_typeWithOkErr')
const _throwIfFalse = require('./throwIfFalse')
const isErr = require('../Boolean/isErr')

/**
 * Throws an exception if anything but a [Crocks Err](https://crocks.dev/docs/crocks/Result.html#err) is passed in.
 * Otherwise does nothing and returns the Err
 *
 * @function
 * @private
 * @category Validation
 * @sig Err a | b -> Err a | THROW
 * @param {*} x - the value to check
 * @returns {Err}
 * @example
 *
 * const Err = require('@eluvio/elv-js-helpers/ADT/Err')
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
 *
 * const _throwIfNotErr = require('@eluvio/elv-js-helpers/Validation/_throwIfNotErr')
 *
 * _throwIfNotErr(42)          //=> EXCEPTION: 'Expected an Err, got: Number (42)'
 *
 * _throwIfNotErr(Ok(42))      //=> EXCEPTION: 'Expected an Err, got: Ok (Ok 42)'
 *
 * _throwIfNotErr(Err['foo'])  //=> (no exception)
 *
 */
const _throwIfNotErr = x =>
  _throwIfFalse(
    `Expected an Err, got: ${_typeWithOkErr(x)} (${x})`,
    isErr(x)
  ) && x

module.exports = _throwIfNotErr
