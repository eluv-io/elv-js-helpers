const either = require('crocks/pointfree/either')
const uniq = require('ramda/src/uniq')

const _throwIfFalse = require('./internal/_throwIfFalse')
const format=require('./format')
const kindOf = require('./kindOf')
const isArray = require('./isArray')

/**
 * Converts a [Crocks Result](https://crocks.dev/docs/crocks/Result.html) to a Plain Old Javascript Object.
 *
 * If the `Result` is an `Ok`, returns `{ok: true, result: a}`, where `a` is the value wrapped by the `Ok`
 *
 * If the `Result` is an `Err`, returns `{ok: false, errors: uniqErrStringArray, errorDetails: arrayErrVal}`
 * where `errorDetails` is the array value wrapped by the `Err`, and `errors` is the result of calling toString() on
 * each item in that array and then removing duplicate strings.
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
 * const resultToPOJO = require('@eluvio/elv-js-helpers/resultToPOJO')
 * const {Err} = require('@eluvio/elv-js-helpers/Result')
 *
 * resultToPOJO(Ok(42))                 //=> {ok: true, result: 42}
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
    `Err instance does not contain an array, instead contains: ${kindOf(errVal)} (${format(errVal)})`,
    isArray(errVal)
  ) && Object({ok: false, errors: uniq(errVal.map(e => e.toString())), errorDetails: errVal}),
  okVal => Object({ok: true, result: okVal}),
  result
)

module.exports = resultToPOJO
