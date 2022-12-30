const either = require('crocks/pointfree/either')
const uniq = require('@eluvio/ramda-fork/src/uniq')

const _throwIfFalse = require('../Validation/throwIfFalse')
const format = require('./format')
const kind = require('../Validation/kind')
const isArray = require('../Boolean/isArray')

/**
 * Converts a [Crocks Result](https://crocks.dev/docs/crocks/Result.html) to a Plain Old Javascript Object.
 *
 * If the `Result` is an `Ok`, returns `{ok: true, value: a}`, where `a` is the value wrapped by the `Ok`
 *
 * If the `Result` is an `Err`, returns `{ok: false, errors: uniqErrStringArray, errorDetails: arrayErrVal}`
 * where `errorDetails` is the array value wrapped by the `Err`, and `errors` is the result of passing each item in
 * that array to `String()` then removing duplicates.
 *
 * If an `Err` result does not contain an array, an exception will be thrown
 *
 * **NOTE:** You should ALWAYS use arrays when constructing `Err` values to ensure that errors accumulate correctly.
 * If you are working with a library that can return either a single error or an array of errors, use the helper
 * function `wrapNonArray`, e.g. `Err(wrapNonArray(extLibValidationErr()))`
 *
 * @function
 * @category Conversion
 * @sig Result [e] a -> Object
 * @param {Result} result - The Crocks Result instance to convert
 * @returns {Object}
 * @example
 *
 * const Err = require('@eluvio/elv-js-helpers/ADT/Err')
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
 *
 * const resultToPOJO = require('@eluvio/elv-js-helpers/Conversion/resultToPOJO')
 *
 * resultToPOJO(Ok(42))                 //=> {ok: true, value: 42}
 *
 * resultToPOJO(Err(['query invalid'])) //=> {ok: false, errors: ["query invalid"], error_details: ["query invalid"]}
 *
 * resultToPOJO(Err('foo'))             //=> EXCEPTION: 'Err instance does not contain an array, instead contains: string ("foo")'
 *
 * const e = RangeError('value too large')
 * console.log(resultToPOJO(Err([e])))
 * `{
 *   ok: false,
 *   errors: [ 'RangeError: value too large' ],
 *   errorDetails: [
 *     RangeError: value too large
 *         at Object.<anonymous>
 *         (stack trace)
 *   ]
 * }`
 *
 */
const resultToPOJO = result => either(
  errVal => _throwIfFalse(
    `Err instance does not contain an array, instead contains: ${kind(errVal)} (${format(errVal)})`,
    isArray(errVal)
  ) && Object({ok: false, errors: uniq(errVal.map(e => String(e))), errorDetails: errVal}),

  okVal => Object({ok: true, value: okVal}),

  result
)

module.exports = resultToPOJO
