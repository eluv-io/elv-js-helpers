const either = require('crocks/pointfree/either')
const identity = require('crocks/combinators/identity')

const _throwIfNotResult = require('./internal/_throwIfNotResult')

/**
 * Returns the value wrapped by a [Crocks Result](https://crocks.dev/docs/crocks/Result.html), whether it is an Ok
 * or an Err
 *
 * Throws an exception if not passed a Result.
 *
 * @function
 * @since v0.0.1
 * @category Functional
 * @sig Result e a -> e | a
 * @param {Any} x - The Crocks Result instance to unwrap
 * @returns {Any}
 * @see resultToPOJO
 *
 * @example
 *
 * resultUnwrap(Err(['invalid query'])) //=> ['invalid query']
 *
 * resultUnwrap(Ok(42)) //=> 42
 *
 */
const resultUnwrap = x => _throwIfNotResult(x) && either(identity,identity, x)

module.exports = resultUnwrap
