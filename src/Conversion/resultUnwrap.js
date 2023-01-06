const either = require('crocks/pointfree/either')
const identity = require('../Functional/identity')

const _throwIfNotResult = require('../Validation/_throwIfNotResult')

/**
 * Returns the value wrapped by a [Crocks Result](https://crocks.dev/docs/crocks/Result.html), whether it is an Ok
 * or an Err
 *
 * Throws an exception if not passed a Result.
 *
 * @function
 * @category Conversion
 * @sig Result e a -> e | a
 * @param {*} x - The Crocks Result instance to unwrap
 * @returns {Any}
 * @see resultToPOJO
 * @example
 *
 * const resultUnwrap = require('@eluvio/elv-js-helpers/Conversion/resultUnwrap')
 *
 * const Err = require('@eluvio/elv-js-helpers/ADT/Err')
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
 *
 * resultUnwrap(Err(['invalid query'])) //=> ['invalid query']
 *
 * resultUnwrap(Ok(42))                 //=> 42
 *
 */
const resultUnwrap = x => _throwIfNotResult(x) && either(identity,identity, x)

module.exports = resultUnwrap
