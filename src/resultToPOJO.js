const either = require('crocks/pointfree/either')
const uniq = require('ramda/src/uniq')

const _throwIfFalse = require('./internal/_throwIfFalse')
const kindOf = require('kind-of')
const isArray = require('./isArray')

/**
 * Converts a [Crocks Result](https://crocks.dev/docs/crocks/Result.html) to a Plain Old Javascript Object.
 *
 * If the `Result` is an `Ok`, returns `{ok: true, result: a}`, where `a` is the value wrapped by the `Ok`
 *
 * If the `Result` is an `Err`, returns `{ok: false, errors: uniqErrArray}` where `uniqErrArray` is a de-duplicated
 * version of the value wrapped by the `Err`.
 *
 * If an `Err` result does not contain an array, an exception will be thrown
 *
 * **NOTE:** You should ALWAYS use arrays when constructing `Err` values to ensure that errors accumulate correctly.
 * If you are working with a library that can return either a single error or an array of errors, use the helper
 * function `wrapNonArray`, e.g. `Err(wrapNonArray(extLibValidationErr()))`
 *
 * @function
 * @since v0.0.1
 * @category Conversion
 * @sig Result [e] a -> Object
 * @param {Result} result - The Crocks Result instance to convert
 * @returns {Object}
 * @example
 *
 * resultToPOJO(Ok(42)) //=> {ok: true, result: 42}
 *
 * resultToPOJO(Err(['query invalid'])) //=> {ok: false, errors: ["query invalid"]}
 *
 */
const resultToPOJO = result => either(
  errVal => _throwIfFalse(
    `Err instance does not contain an array, instead contains: ${kindOf(errVal)} (${errVal})`,
    isArray(errVal)
  ) && Object({ok: false, errors: errVal.map(uniq)}),
  okVal => Object({ok: true, result: okVal}),
  result
)

module.exports = resultToPOJO
