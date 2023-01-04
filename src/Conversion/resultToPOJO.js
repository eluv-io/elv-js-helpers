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
 * If the `Result` is an `Err`, returns `{ok: false, errMsgs: uniqErrStringArray, errors: arrayErrVal}`
 * where `errors` is the array value wrapped by the `Err` (often an array of Javascript Error objects), and `errMsgs`
 * is the result of passing each item in that array to `String()` then removing duplicates.
 *
 * Throws an error if the `Result` is an `Err` that does not contain an array. (This situation is not usually encountered,
 * as the `Err()` function performs automatic conversion to single-element array if the input is not an array)
 *
 * @function
 * @category Conversion
 * @sig Result [e] a -> Object
 * @param {Result} result - The Crocks Result instance to convert
 * @returns {Object}
 * @example
 *
 * const resultToPOJO = require('@eluvio/elv-js-helpers/Conversion/resultToPOJO')
 *
 * const Err = require('@eluvio/elv-js-helpers/ADT/Err')
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
 *
 * const dumpJSON = require('@eluvio/elv-js-helpers/Misc/dumpJSON')
 *
 * resultToPOJO(Ok(42))                 //=> {ok: true, value: 42}
 *
 * resultToPOJO(Err(['query invalid'])) //=> {ok: false, errMsgs: ["query invalid"], errors: ["query invalid"]}
 *
 * const e = RangeError('value too large')
 * dumpJSON(resultToPOJO(Err([e])))     //=> OUTPUT: `{\n  "ok": false,\n  "errMsgs": [\n    "RangeError: value too large"\n  ],\n  "errors": [\n    {}\n  ]\n}`
 *
 */
const resultToPOJO = result => either(
  errVal => _throwIfFalse(
    `Err instance does not contain an array, instead contains: ${kind(errVal)} (${format(errVal)})`,
    isArray(errVal)
  ) && Object({ok: false, errMsgs: uniq(errVal.map(e => String(e))), errors: errVal}),

  okVal => Object({ok: true, value: okVal}),

  result
)

module.exports = resultToPOJO
