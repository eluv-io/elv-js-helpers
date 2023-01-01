const Result = require('crocks/Result')

const wrapNonArray = require('../Conversion/wrapNonArray')

const throwIfTrue = require('../Validation/throwIfTrue')

/**
 * Passthrough for the `Err` variety of the `Result` [Crocks Algebraic Data Type](https://crocks.dev/docs/crocks/)
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_, with automatic wrapping of non-array values to ensure proper
 * concatenation of `Err` objects.
 *
 * See [https://crocks.dev/docs/crocks/Result.html](https://crocks.dev/docs/crocks/Result.html) for more details.
 *
 * Allows users of `elv-js-helpers` to create `Err` objects without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency, and following conventions of the `elv-js-helpers` package:
 *
 * There are 2 kinds of `Result` objects, `Ok` and `Err`, that wrap successful and failed computations, respectively.
 *
 * `Result` objects are useful for handling errors in functional pipelines and can collect multiple errors from various
 * branches of a workflow.
 *
 * Normally, one does not create generic `Result` object instances, but rather `Ok` or `Err` instances.
 *
 * @function
 * @category ADT
 * @sig a -> Err a
 * @param {*} x - The value to wrap in an `Err`
 * @returns {Result}
 * @example
 *
 * const Err = require('@eluvio/elv-js-helpers/ADT/Err')
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
 *
 * const resultToPOJO = require('@eluvio/elv-js-helpers/Conversion/resultToPOJO')
 *
 * const curry = require('@eluvio/elv-js-helpers/Functional/curry')
 * const liftA2 = require('@eluvio/elv-js-helpers/Functional/liftA2')
 *
 * const dumpJSON = require('@eluvio/elv-js-helpers/Misc/dumpJSON')
 *
 * const okObject = Ok(42)
 *
 * // Non-array input automatically converted to 1-element array:
 * const errObject1 = Err('failed to obtain first input')
 * errObject1.inspect()                                          //=> 'Err [ "failed to obtain first input" ]'
 *
 * const errObject2 = Err(['failed to obtain second input'])
 * errObject2.inspect()                                          //=> 'Err [ "failed to obtain second input" ]'
 *
 * const mult = (a, b) => a * b
 *
 * // convert function 'mult' into one that works with values wrapped in Ok / Err
 * const multResults = liftA2(curry(mult))
 *
 * const goodResult = multResults(okObject, okObject)
 *
 * goodResult.inspect()                                          //=> 'Ok 1764'
 *
 * dumpJSON(resultToPOJO(goodResult))                            //=> OUTPUT: '{\n  "ok": true,\n  "value": 1764\n}'
 *
 * multResults(errObject1, okObject).inspect()                   //=> 'Err [ "failed to obtain first input" ]'
 *
 * multResults(okObject, errObject2).inspect()                   //=> 'Err [ "failed to obtain second input" ]'
 *
 * const resultTwoBadInputs = multResults(errObject1, errObject2)
 *
 * resultTwoBadInputs.inspect()                                  //=> 'Err [ "failed to obtain first input", "failed to obtain second input" ]'
 *
 * dumpJSON(resultToPOJO(resultTwoBadInputs))                    //=> OUTPUT: '{\n  "ok": false,\n  "errors": [\n    "failed to obtain first input",\n    "failed to obtain second input"\n  ],\n  "errorDetails": [\n    "failed to obtain first input",\n    "failed to obtain second input"\n  ]\n}'
 *
 * Err([])                                                       //=> EXCEPTION: 'Err cannot wrap an empty array'
 *
 * Err([undefined]).inspect()                                    //=> 'Err [ undefined ]'
 *
 * dumpJSON(resultToPOJO(Err([undefined])))                      //=> OUTPUT: '{\n  "ok": false,\n  "errors": [\n    "undefined"\n  ],\n  "errorDetails": [\n    null\n  ]\n}'
 */
const Err = x => {
  const arr = wrapNonArray(x)
  throwIfTrue('Err cannot wrap an empty array', arr.length === 0)
  arr.map(x => String(x))
  return Result.Err(arr)
}

module.exports = Err
