/**
 * Passthrough for the `liftA2()` [Crocks](https://crocks.dev/) function (Copyright © 2016, Ian Hofmann-Hicks, ISC license)
 *
 * See [https://crocks.dev/docs/functions/helpers.html#lifta2](https://crocks.dev/docs/functions/helpers.html#lifta2)
 * for more details.
 *
 * Allows users of `elv-js-helpers` to use the function without adding the [Crocks](https://www.npmjs.com/package/crocks)
 * package as a dependency.
 *
 * [Lifting](https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch10#bro-do-you-even-lift) converts a function
 * that works with 'normal' values as inputs and outputs and converts it into a function that works with values
 * that are wrapped in a functional data type (ADT) like `Ok`, `Err`, `List`, and `Pair`. The converted function will
 * also return a value wrapped in a functional data type.
 *
 * This adapts the function to be able to compose into functional workflows, making it easier to add things like
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
 * const curry = require('@eluvio/elv-js-helpers/curry')
 * const Err = require('@eluvio/elv-js-helpers/Err')
 * const liftA2 = require('@eluvio/elv-js-helpers/liftA2')
 * const Ok = require('@eluvio/elv-js-helpers/Ok')
 * const resultToPOJO = require('@eluvio/elv-js-helpers/resultToPOJO')
 *
 * const mult = (a, b) => a * b                              // function that takes and returns 'normal' values
 *
 * mult(42, 42)                                              // 1764
 *
 * const liftedMult = liftA2(curry(mult))                    //=> convert function 'mult' into one that works with values wrapped in functional data types
 *
 * const okObject = Ok(42)                                   //=> Ok 42
 *
 * const errObject1 = Err('failed to obtain first input')    //=> Err ['failed to obtain first input'] (automatically converted to 1-element array)
 *
 * const errObject2 = Err(['failed to obtain second input']) //=> Err ['failed to obtain second input']
 *
 * const goodResult = liftedMult(okObject, okObject)         //=> Ok 1764
 *
 * console.log(resultToPOJO(goodResult))
 * '{ ok: true, result: 1764 }'
 *
 * const badResult1 = liftedMult(errObject1, okObject)       //=> Err ['failed to obtain first input']
 *
 * const badResult2 = liftedMult(okObject, errObject2)       //=> Err ['failed to obtain second input']
 *
 * const badResult3 = liftedMult(errObject1, errObject2)     //=> Err ['failed to obtain first input', 'failed to obtain second input']
 *
 * console.log(resultToPOJO(badResult3))
 * `{
 *   ok: false,
 *   errors: [ 'failed to obtain first input', 'failed to obtain second input' ],
 *   errorDetails: [ 'failed to obtain first input', 'failed to obtain second input' ]
 * }`
 *
 * // liftA2 itself is curried, it can be called with 1-3 arguments as desired. If called with 3 arguments, it will
 * // immediately return the final result instead of returning a function.
 * liftA2(curry(mult), okObject, okObject)                   //=> Ok 1764
 *
 */
const liftA2 = require('crocks/helpers/liftA2')

module.exports = liftA2
