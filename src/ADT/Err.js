const Result = require('crocks/Result')

const wrapNonArray = require('../Conversion/wrapNonArray')

/**
 * Passthrough for the `Err` variety of the `Result` [Crocks Algebraic Data Type](https://crocks.dev/docs/crocks/)
 * _(Copyright © 2016, Ian Hofmann-Hicks, ISC license)_, with automatic wrapping of non-array values to ensure proper
 * concatenation of `Err` objects.
 *
 * See [https://crocks.dev/docs/crocks/Result.html](https://crocks.dev/docs/crocks/Result.html) for more details.
 *
 * Allows users of `elv-js-helpers` to create `Err` objects without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
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
 * const okObject = Ok(42)                                   //=> Ok 42
 *
 * const errObject1 = Err('failed to obtain first input')    //=> Err ['failed to obtain first input'] (automatically converted to 1-element array)
 *
 * const errObject2 = Err(['failed to obtain second input']) //=> Err ['failed to obtain second input']
 *
 * const mult = (a, b) => a * b
 *
 * const multResults = liftA2(curry(mult))                   //=> convert function 'mult' into one that works with values wrapped in Ok / Err
 *
 * const goodResult = multResults(okObject, okObject)        //=> Ok 1764
 *
 * console.log(resultToPOJO(goodResult))
 * '{ ok: true, result: 1764 }'
 *
 * const badResult1 = multResults(errObject1, okObject)      //=> Err ['failed to obtain first input']
 *
 * const badResult2 = multResults(okObject, errObject2)      //=> Err ['failed to obtain second input']
 *
 * const badResult3 = multResults(errObject1, errObject2)    //=> Err ['failed to obtain first input', 'failed to obtain second input']
 *
 * console.log(resultToPOJO(badResult3))
 * `{
 *   ok: false,
 *   errors: [ 'failed to obtain first input', 'failed to obtain second input' ],
 *   errorDetails: [ 'failed to obtain first input', 'failed to obtain second input' ]
 * }`
 *
 */
const Err = x => Result.Err(wrapNonArray(x))

module.exports = Err
