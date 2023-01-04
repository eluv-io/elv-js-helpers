/**
 * Passthrough for the `liftA2()` [Crocks](https://crocks.dev/) function
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_
 *
 * See [https://crocks.dev/docs/functions/helpers.html#lifta2](https://crocks.dev/docs/functions/helpers.html#lifta2)
 * for more details.
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * [Lifting](https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch10#bro-do-you-even-lift) converts a function
 * that works with 'normal' values as inputs and outputs and converts it into a function that works with values
 * that are wrapped in a Functional data type (ADT) like `Ok`, `Err`, `List`, and `Pair`. The converted function will
 * also return a value wrapped in a Functional data type.
 *
 * This adapts the function to be able to compose into Functional workflows, making it easier to add things like
 * input validation, error collection, and asynchronous event handling to the function cleanly.
 *
 * `liftA2` specifically converts 2-input curried functions.
 *
 * @function
 * @curried
 * @category Functional
 * @sig Applicative m => (a -> b -> c) -> m a -> m b -> m c
 * @param {Function} - The 2-input curried function to lift
 * @returns {Function} The lifted function
 * @example
 *
 * const liftA2 = require('@eluvio/elv-js-helpers/Functional/liftA2')
 *
 * const curry = require('@eluvio/elv-js-helpers/Functional/curry')
 * const dumpJSON = require('@eluvio/elv-js-helpers/Misc/dumpJSON')
 * const Err = require('@eluvio/elv-js-helpers/ADT/Err')
 * const Ok = require('@eluvio/elv-js-helpers/ADT/Ok')
 * const resultToPOJO = require('@eluvio/elv-js-helpers/Conversion/resultToPOJO')
 *
 * // define a function that takes and returns 'normal' values:
 * const mult = (a, b) => a * b
 *
 * mult(42, 42)                                              //=> 1764
 *
 * // convert function 'mult' into one that works with values wrapped in Functional data types
 * const liftedMult = liftA2(curry(mult))
 *
 * // create a wrapped good input
 * const okObject = Ok(42)
 *
 * // create 2 wrapped errors indicating input failures:
 *
 * // non-array input automatically converted to single element array
 * const errObject1 = Err('failed to obtain first input')
 *
 * const errObject2 = Err(['failed to obtain second input'])
 *
 * const goodResult = liftedMult(okObject, okObject)
 * goodResult.inspect()                                      //=> 'Ok 1764'
 *
 * resultToPOJO(goodResult)                                  //=> {ok: true, value: 1764}
 *
 * // call lifted function using 1 bad input:
 *
 * const badResult1 = liftedMult(errObject1, okObject)
 * resultToPOJO(badResult1).ok                               //=> false
 * resultToPOJO(badResult1).errMsgs                          //=> ['failed to obtain first input']
 *
 * const badResult2 = liftedMult(okObject, errObject2)
 * resultToPOJO(badResult2).ok                               //=> false
 * resultToPOJO(badResult2).errMsgs                          //=> ['failed to obtain second input']
 *
 * // call lifted function using 2 bad inputs:
 *
 * const badResult3 = liftedMult(errObject1, errObject2)
 * resultToPOJO(badResult3).ok                               //=> false
 * resultToPOJO(badResult3).errMsgs                          //=> ['failed to obtain first input', 'failed to obtain second input']
 *
 * dumpJSON(resultToPOJO(badResult3))                        //=> OUTPUT: `{\n  "ok": false,\n  "errMsgs": [\n    "failed to obtain first input",\n    "failed to obtain second input"\n  ],\n  "errors": [\n    "failed to obtain first input",\n    "failed to obtain second input"\n  ]\n}`
 *
 * // liftA2 itself is curried, it can be called with 1-3 arguments as desired. If called with 3 arguments, it will
 * // immediately return the final result instead of returning a function.
 * liftA2(curry(mult), okObject, okObject).inspect()         //=> 'Ok 1764'
 *
 */
const liftA2 = require('crocks/helpers/liftA2')

module.exports = liftA2
